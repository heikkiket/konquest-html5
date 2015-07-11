var file = '{ "planets": { "p1": { "name": "Uranus", "killPercent": 0.3, "productionRate": 5, "ships": 20, "planetColour": "#00FF00", "planetType": "military,mining,tech,commerce", "owner": "c2", "x": 4, "y": 4 } }, "fleets": { "f1": { "owner": "c2", "attackFactor": 0.3, "origin": "p1", "destination": "p3", "departureTime": "Turn 2", "x": 4, "y": 5, "active": true } }, "players": { "c1": { "name": "Heikki", "shipsProduced": 333, "fleetsLaunched": 14, "othersShipsDestroyed": 150, "ownShipsDestroyed": 240 } } }'
var konquestData = JSON.parse(file);
  
function drawPlanets() {
  
  //let's draw a planet
  
  $( "#spacegrid tr:nth-child(" + konquestData.planets.p1.y +
    ") td:nth-child(" + konquestData.planets.p1.x + ")" )
  .append("<img src=\"img/planet1.png\""
  + "title=\""+ konquestData.planets.p1.name
  + "\" onmouseover=\"showPlanetInfo('p1')\" onmouseout=\"hidePlanetInfo();\" />");

}

function showPlanetInfo(planetId) {

  $( "#planetinfo .name" ).html("<b>Name:</b> " + konquestData.planets[planetId].name);
  $( "#planetinfo .killPercent" ).html("<b>Kill percent:</b> " + konquestData.planets[planetId].killPercent);
  $( "#planetinfo .productionRate" ).html("<b>Production rate:</b> " + konquestData.planets[planetId].productionRate);
  $( "#planetinfo .ships" ).html("<b>Amount of ships:</b> " + konquestData.planets[planetId].ships);

  
  $( "#planetinfo" ).css( "display", "block" );
}

function hidePlanetInfo() {
  $( "#planetinfo" ).css( "display", "none");
}