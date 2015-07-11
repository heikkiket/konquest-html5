function createTable() {
  var x = document.tablecreator.x.value;
  var y = document.tablecreator.y.value;
    
  var table = document.getElementById("spacegrid");
  
  while(table.firstChild)
  {
    table.removeChild(table.firstChild);
  }


  for ( var i = 0; i < y; i++) {
    
    var row = document.createElement("tr");
    
    for ( var e = 0; e < x; e++) {
        var td = document.createElement("td");
        row.appendChild(td);
    }
    
    table.appendChild(row);
  }
}