<?php

function game($parameters) {
  $id = $parameters[0];
  $mode = $parameters[1];

  switch($mode) {
    case "read":
      include("konquest.json");
      break;
    case "write":
    case "init":
    $db = new PDO('sqlite::konquest.db');
    $db->exec("CREATE TABLE game(gameid, date_started)");
    $db->exec("CREATE TABLE planets(planetid, owner_id)");
    $db->exec("CREATE TABLE fleets(fleetid, owner_id)");
    $db->exec("CREATE TABLE chat(msgid, playerid, gameid, body, date_sent)");
    $db->exec("CREATE TABLE players(id, name, gameid)");
    echo "INITED";
    default:
      echo "<h1> Da Game</h1>";
      echo "<p>Game ID: " . $id;
  }
}

?>