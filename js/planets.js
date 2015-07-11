function drawPlanets() {
  var file = '{"konquestHtml5": { "planet":    { "planetId": 1, "planetName": "Uranus", "killPercent": 0.3, "productionRate": 5, "ships": 20, "planetColour": "#00FF00", "planetType": "military,mining,tech,commerce", "owner": 2, "x": 4, "y": 4 }, "fleet": { "fleetId": 4, "owner": 2, "attackFactor": 0.3, "origin": 1, "destination": 3, "departureTime": "Turn 2", "x": 4, "y": 5, "active": true }, "player": { "playerId": 2, "playerName": "Heikki", "shipsProduced": 333, "fleetsLaunched": 14, "othersShipsDestroyed": 150, "ownShipsDestroyed": 240 } }}'
  var data = JSON.parse(file);
  
  console.log(data.konquestHtml5.planet.x, data.konquestHtml5.planet.y);
  
  //let's draw a planet
  
  $( "#spacegrid tr:nth-child(" + data.konquestHtml5.planet.y +
    ") td:nth-child(" + data.konquestHtml5.planet.x + ")" )
  .append("<img src=\"img/planet1.png\" title=\"uranus\" />")
  
}