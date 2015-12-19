<?php

require_once("modules/index.php");
require_once("modules/game.php");

$query = $_SERVER['QUERY_STRING'];
$query = split("/", $query);

$module = array_shift($query);
$parameters = $query;


switch($module) {
  case "g":
    //game
    game($parameters);
    break;

  case "help":
    //help functions
    break;

  default:
    index($parameters);
}

?>