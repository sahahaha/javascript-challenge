// from data.js
var tableData = data;

tbody = d3.select("tbody")

// Looping through data file to add keys and their values to the table
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var inputDate = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date
function dateChange(){
    d3.event.preventDefault();
    var newTable = tableData.filter(sighting => sighting.datetime===inputDate.property("value"))
    displayData(newTable)
}

// event listeners to handle change and click
inputDate.on("change", dateChange)
button.on("click", dateChange)