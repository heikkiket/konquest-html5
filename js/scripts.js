// Konquest Scripts.js -file
// This contains all the app Java Script stuff

//-------------- Before the game -------------------------------

function initGame()
{
  //This is run in the beginning. Draws Space, sets settings etc
  
  //Update JSON
}

function initSpace()
{
  // This will randomize space and return it to a preview screen.
}

function initScreen()
{
  //This kind of helper function may be necessary for Init screen
}

//------------------ Between turns ------------------------------

function updateJSON()
{
  //TODO: this function updates JSON via AJAX routine
}

function newTurn()
{
  //This is run every time when new turn button is pressed.
  
  //Move ships
  
  //-------------------
  // If in remote mode, upload JSON, combine in server and download
  //-------------------
  
  //Check for fights and do them
  
  //Change planet ownerships
  
  //Check for victory / defeat

  
  //Alerts / messages
  
  //Draw planets
  
}

//------------------ During the game -------------------------------

function showPlanetInfo()
{
  //Already implemented
}

//TODO: Fleet launching needs a gui and maybe some helper functions also.
function launchFleet(planetA, planetB, player)
{
  // TODO: This function launches a fleet from planet A to planet B
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