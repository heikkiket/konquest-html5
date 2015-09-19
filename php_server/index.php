<?php

function index($parameters) {
  $script = <<<EOD
<script>
function generateRandom() {
   this.document.location.href = "g/asdasdasd";
}
</script>
EOD;
  echo $script . "<h1>Galactinen Walloitus</h1>";
  echo "<button id='go' onclick='generateRandom()'>Pelaa!</button>";
}

function game($parameters) {
  $id = $parameters[0];
  echo "<h1> Da Game</h1>";
  echo "<p>Game ID: " . $id;
}

function init() {
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
}

error_reporting(E_ERROR | E_WARNING);
init();

?>