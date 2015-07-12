var file = '{ "planets": { "p1": { "name": "Uranus", "killPercent": 0.3, "productionRate": 5, "ships": 20, "planetColour": "#00FF00", "planetType": "military", "owner": "c2", "x": 4, "y": 4 }, "p2": { "name": "Neptunus", "killPercent": 0.75, "productionRate": 13, "ships": 15, "planetColour": "#00FF00", "planetType": "mining", "owner": "c2", "x": 10, "y": 5 }, "p3": { "name": "Opullus", "killPercent": 0.89, "productionRate": 6, "ships": 30, "planetColour": "#00FF00", "planetType": "military,mining,tech,commerce", "owner": "c2", "x": 8, "y": 9 } }, "fleets": { "f1": { "owner": "c2", "attackFactor": 0.3, "origin": "p1", "destination": "p3", "departureTime": "Turn 2", "x": 4, "y": 5, "active": true } }, "players": { "c1": { "name": "Heikki", "shipsProduced": 333, "fleetsLaunched": 14, "othersShipsDestroyed": 150, "ownShipsDestroyed": 240 } } }'
var konquestData = JSON.parse(file);
  
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