<?php

function game($parameters) {
  $id = $parameters[0];
  $mode = $parameters[1];

  switch($mode) {
    case "read":
      include("konquest.json");
      break;
    case "write":
    default:
      echo "<h1> Da Game</h1>";
      echo "<p>Game ID: " . $id;
  }
}

?>