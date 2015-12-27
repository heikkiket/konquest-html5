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
  + '" onclick="planetClicked(\''+planetId+'\')" /></span>')
  .addClass("planet id-" + planetId)

  if(planet.owner_id != null) {
    cell.css("background-color", konquestData.players[planet.owner_id].colour)
  }

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
  
  if(planetId == false) {
    $( "#planetinfo").hide();
    return;
  }

  $( "#planetinfo").show();
  $( "#planetinfo .name" ).html(konquestData.planets[planetId].name);
  $( "#planetinfo .killPercent" ).html(konquestData.planets[planetId].killPercent);
  $( "#planetinfo .productionRate" ).html(konquestData.planets[planetId].productionRate);
  $( "#planetinfo .ships" ).html(konquestData.planets[planetId].shipsAmount);
  $( "#preparefleet .departure").hide();
}

function showPlayerInfo() {
  konquestData.players.forEach(function(player) {
    playerinfo += "<tr><td style='background-color:" + player.colour + ";'></td><td>" + player.name + "</td></tr>";
  })
  $( "#playerinfoTable").html(playerinfo);
}

//TODO: Fleet launching needs a gui and maybe some helper functions also.
function launchFleet(planetA, planetB, player)
{
  // TODO: This function launches a fleet from planet A to planet B,
  // controlled by player.
}

function prepareFleet(planetId) {
  switch(turnData.planetSelection.phase) {
    case null:
      //nothing to do!
      break;
    case 0:
      //prepare!
      
      turnData.planetSelection.launchingFleet = true;
      
      $( "#preparefleet").show();
      $( "#preparefleet .selectDeparture").show();
      $( "#preparefleet .continueButton").hide();
      $( "#preparefleet .departure").hide();
      $( "#preparefleet .selectDestination").hide();
      $( "#preparefleet .destination").hide();
      
      turnData.planetSelection.phase = 1;
      break;
    case 1:
      //Select A
      
      //Changing departure
      oldSelected = turnData.planetSelection.selectedPlanets.departureId;
      turnData.planetSelection.selectedPlanets.departureId = planetId;
      selectPlanet(oldSelected, false);
      selectPlanet(planetId, true);
      
      $( "#preparefleet .selectDeparture").hide();
      $( "#preparefleet .departure").show();
      $( "#preparefleet .departurePlanet").html(konquestData.planets[planetId].name);
      $( "#preparefleet .continueButton").show();
      break;
    case 2:
      //Select B
      turnData.planetSelection.launchingFleet = true;
      $( "#preparefleet").show();
      
      $( "#preparefleet .selectDeparture").hide();
      $( "#preparefleet .departure").show();
      $( "#preparefleet .continueButton").hide();
      $( "#preparefleet .selectDestination").hide();
      $( "#preparefleet .destination").show();
      $( "#preparefleet .destinationPlanet").html(konquestData.planets[planetId].name);
      
      //Changing destination
      oldSelected = turnData.planetSelection.selectedPlanets.destinationId;
      turnData.planetSelection.selectedPlanets.destinationId = planetId;
      selectPlanet(oldSelected, false);
      selectPlanet(planetId, true);
      break;
    case 3:
      //launch! and continue to cancel phase
      //       launchFleet(departureId, destinationId, playerId);
    case 4:
      //cancel
      turnData.planetSelection.selectedPlanets.destinationId = null;
      turnData.planetSelection.selectedPlanets.departureId = null;
      turnData.planetSelection.launchingFleet = false;
      $( "#preparefleet #shipsAmount").val(0);
      $( "#preparefleet").hide();
      showPlanetInfo(false);
      unselectAllPlanets();
      break;
  }
  
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
//button handlers etc.

function planetClicked(planetId) {
  if(turnData.planetSelection.launchingFleet) {
    //launching a fleet
    if(konquestData.planets[planetId].selected) {
      //Already selected. Do nothing.
    } else {
      selectPlanet(planetId, true);
      prepareFleet(planetId);
    }
  } else {
      //just clicking on a canvas
    if(konquestData.planets[planetId].selected) {
        // unselect
        selectPlanet(planetId, false);
        showPlanetInfo(false); // hide planet info
      } else {
        //select first
        unselectAllPlanets();

        selectPlanet(planetId, true);
        turnData.planetSelection.selectedPlanets.departureId = planetId;
        showPlanetInfo(planetId);
    }
  }
}

function selectPlanet(planetId, select) {

  if (select) {
    $( "#spacegrid .id-" + planetId).addClass("selected");
    konquestData.planets[planetId].selected = true;
  } else {
    $( "#spacegrid .id-" + planetId).removeClass("selected");
    konquestData.planets[planetId].selected = false;
  }
}

function unselectAllPlanets() {
  $( "#spacegrid .planet" ).removeClass("selected");
  konquestData.planets.forEach(function(planet) {
    planet.selected = false;
  })
}

function sendShips() {
  turnData.planetSelection.phase = 0;
  prepareFleet();
}

function continueButtonPressed() {
  turnData.planetSelection.phase = 2;
  $( "#preparefleet .selectDestination").show();
  $( "#preparefleet .destination").hide();
}

function sendShipsFromPlanet() {
  var departureId = turnData.planetSelection.selectedPlanets.departureId;
  $( "#preparefleet .departurePlanet").html(konquestData.planets[departureId].name);
  turnData.planetSelection.phase = 2;
  prepareFleet();
}

function launchButtonPressed() {
  turnData.planetSelection.phase = 3;
  prepareFleet();
}

function launchCanceled() {
  turnData.planetSelection.phase = 4;
  prepareFleet();
}