<?php

function game($parameters) {
  $gameid = $parameters[0]; //TODO: Sanitize input for SQL injections
  $mode = $parameters[1];

  $db = new PDO('sqlite:db/konquest.db');

  switch($mode) {
    case "read":
      foreach($db->query("SELECT * from planets", PDO::FETCH_ASSOC) as $row) {
        $planets[]=$row;
      }

      foreach($db->query("SELECT * from fleets", PDO::FETCH_ASSOC) as $row) {
        $fleets[]=$row;
      }

      foreach($db->query("SELECT * from players", PDO::FETCH_ASSOC) as $row) {
        $players[]=$row;
      }

      $konquest_json['planets'] = $planets;
      $konquest_json['fleets'] = $fleets;
      $konquest_json['players'] = $players;

      echo json_encode($konquest_json);
      break;
    case "write":
      $stmt = $db->prepare("INSERT INTO players (id, name, gameid) VALUES (:id, :name, :gameid)");
      $stmt->bindParam(':id', $p_id);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':gameid', $gameid);

      // insert one row
      $p_id = 1;
      $name = "Pekka";
      $stmt->execute();

      // insert another row with different values
      $p_id = 2;
      $name = "Maija";
      $stmt->execute();

      date("c", time());
        
        /*
        $konquest_json = $_GET['json_data']
        json_decode($konquest_json)

        foreach($konquest_json) as $table => $tableContents:
          foreach $tableContents as $rowName => $row
              if row exists UPDATE else INSERT => Save to $operation
              foreach $row as $cell => $data
                collect all the data to the one expression

                put $operation variable to the beginning
                UPDATE $table SET $cell = $data WHERE gameid IS $gameid
                INSERT INTO $table ($cell, gameid) VALUES ($data, $gameid)

        */
      break;
    case "init":
      $db->exec("CREATE TABLE game(gameid, date_started)");
      $db->exec("CREATE TABLE planets(planetid, gameid, name, killPercent, productionRate, shipsAmount, PlanetColour, planetType, owner_id, x, y)");
      $db->exec("CREATE TABLE fleets(fleetid, gameid, attackFactor, origin_planet, destination_planet, departureTime, travelTime, owner_id, active)");
      $db->exec("CREATE TABLE players(id, name, gameid, shipsProduced, fleetsLaunched, othersShipsDestroyed, ownShipsDestroyed)");
      $db->exec("CREATE TABLE chat(msgid, playerid, gameid, body, timestamp)");

      $stmt = $db->prepare("INSERT INTO game (gameid, date_started) VALUES (:gameid, :date_started)");
      $stmt->bindParam(':gameid', $gameid);
      $stmt->bindParam(':date_started', time());

      echo "INITED<br />";
      echo '<a href="read">READ</a>';
      break;
    default:
      echo "<h1> Da Game</h1>";
      echo "<p>Game ID: " . $gameid;
  }
}

?>