// Konquest Scripts.js -file
// This contains all the Java Script stuff written for app

//-------------- Before the game -------------------------------

function initGame()
{
  //This is run in the beginning. Draws Space, sets settings etc
  
  //Update JSON
}

function initSpace()
{
  // This will randomize space and return it to a preview screen.

  function createPlanet() {
    //This randomizes a single planet. Maybe one could give parameters
    //to instruct what kind of planet it will be. parameters could be
    //in key=>value array.
  }
}

function initScreen()
{
  //This kind of helper function may be necessary for Init screen
}

//------------------ In every turn ------------------------------


function newTurn(konquestData)
{
  //This is run every time when new turn button is pressed.
  
  //Move ships
  
  //-------------------
  // If in remote mode, upload JSON, combine in server and download
  //-------------------
  
  //Check for fights and do them ... in which order?
  
  //Change planet ownerships
  
  //Check for victory / defeat

  
  //Alerts / messages
  
  //Draw planets
  drawGrid();
  drawPlanets();
  
}

function drawGrid() {
  var x = document.tablecreator.x.value;
  var y = document.tablecreator.y.value;
  
  var grid = document.getElementById("spacegrid");
  
  //empty grid
  while(grid.firstChild)
  {
    grid.removeChild(grid.firstChild);
  }
  
  
  for ( var i = 0; i < y; i++) {
    
    var row = document.createElement("tr");
    
    for ( var e = 0; e < x; e++) {
      var td = document.createElement("td");
      row.appendChild(td);
    }
    
    grid.appendChild(row);
  }
  
}

function drawPlanets() {
  
  $.each(konquestData.planets, function(key, planet) {
    
    //lets draw a planet with the help of jQuery selectors
    
    $( "#spacegrid tr:nth-child(" + planet.y +
    ") td:nth-child(" + planet.x + ")" )
    .append('<span data-tooltip aria-haspopup="true" class="has-tip" title="'
    + '<b>Name:</b> ' + planet.name + '<br /><b>Ships:</b> ' + planet.ships + '<br /><b>Kill percent:</b> ' + planet.killPercent
    + '">'
    + '<img src="img/planet1.png"'
    + '" onmouseover="showPlanetInfo(\''+key+'\')" onmouseout="hidePlanetInfo();" /></span>');
  });
  
  //Ask Foundation to redraw tooltips
  $(document).foundation('tooltip', 'reflow');
  
}

//------------------ During the game -------------------------------

function showPlanetInfo(planetId) {
  
  $( "#planetinfo .name" ).html("<b>Name:</b> " + konquestData.planets[planetId].name);
  $( "#planetinfo .killPercent" ).html("<b>Kill percent:</b> " + konquestData.planets[planetId].killPercent);
  $( "#planetinfo .productionRate" ).html("<b>Production rate:</b> " + konquestData.planets[planetId].productionRate);
  $( "#planetinfo .ships" ).html("<b>Amount of ships:</b> " + konquestData.planets[planetId].ships);
  
  
  $( "#planetinfo" ).show();
}

function hidePlanetInfo() {
  $( "#planetinfo" ).hide();
}

//TODO: Fleet launching needs a gui and maybe some helper functions also.
function launchFleet(planetA, planetB, player)
{
  // TODO: This function launches a fleet from planet A to planet B,
  // controlled by player.
}

function showStandings()
{
  //This is probably a helper function. Most of this stuff is done in HTML file
}

function backgroundStuff() {
  //This will be a helper function for playing music etc.
}

//------------------- GUI helpers ------------------------------------

//Maybe we should group all the helper functions here? Like Toggle elements,
//button handlers etc. Not sure if there will be many.