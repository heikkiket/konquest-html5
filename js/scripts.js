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
  //Reset turnData{}
  
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
  
  $.each(konquestData.planets, function(planetId, planet) {
    drawPlanet(planetId, planet);
  });
  
  //Ask Foundation to redraw tooltips
  $(document).foundation('tooltip', 'reflow');
}

function drawPlanet(planetId, planet) {

  if (typeof(planet) === 'undefined') {
    var planet = konquestData.planets[planetId];
    var single = true;
  }

  //lets draw a planet with the help of jQuery selectors
  var cell = $( "#spacegrid tr:nth-child(" + planet.y +
  ") td:nth-child(" + planet.x + ")" )

  cell.html('<span data-tooltip aria-haspopup="true" class="has-tip" title="'
  + '<b>Name:</b> ' + planet.name + '<br /><b>Ships:</b> ' + planet.shipsAmount + '<br /><b>Kill percent:</b> ' + planet.killPercent
  + '">'
  + '<img src="img/planet1.png"'
  + '" onclick="selectPlanet(\''+planetId+'\')" /></span>')
  .addClass("planet id-" + planetId)

  selectedPlanets = turnData.planetSelection.selectedPlanets;
  if(planetId == selectedPlanets.departureId || planetId == selectedPlanets.destinationId) {
    cell.addClass("selected");
  } else {
    cell.removeClass("selected");
  }

  if(single) {
    //Ask Foundation to redraw tooltips
    $(document).foundation('tooltip', 'reflow');
  }
}

//------------------ During the game -------------------------------

function showPlanetInfo(planetId) {
  
  if(planetId == null) {
    $( "#planetinfo").hide();
    return;
  }

  $( "#planetinfo").show();
  $( "#planetinfo .name" ).html(konquestData.planets[planetId].name);
  $( "#planetinfo .killPercent" ).html(konquestData.planets[planetId].killPercent);
  $( "#planetinfo .productionRate" ).html(konquestData.planets[planetId].productionRate);
  $( "#planetinfo .ships" ).html(konquestData.planets[planetId].shipsAmount);
  $( "#preparefleet .departurePlanet").html(konquestData.planets[planetId].name);
}

function prepareFleet(planetId) {
  $( "#preparefleet").toggle();
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

function selectPlanet(planetId) {
  if(turnData.planetSelection.launchingFleet == true) {
    //launching fleet
  } else {
      if (turnData.planetSelection.selectedPlanets.departureId == planetId) {
        // unselect
        turnData.planetSelection.selectedPlanets.departureId = null;
        showPlanetInfo();
        drawPlanet(planetId);
      } else {
        //select first
        unselectAllPlanets();
        turnData.planetSelection.selectedPlanets.departureId = planetId;
        showPlanetInfo(planetId);
        drawPlanet(planetId);
    }
  }
}
function unselectAllPlanets() {
  $( "#spacegrid .planet").removeClass("selected");
}