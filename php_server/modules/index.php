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

?>