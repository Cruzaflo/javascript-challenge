// from data.js
var tableData = data;
console.log(data)
// YOUR CODE HERE!

var tableBody = d3.select("tbody")


function populateTable(input) {
    tableBody.html("")
    input.forEach(function (entry) {
        newRow = tableBody.append("tr")
        Object.values(entry).forEach(function(value){
            newRow.append("td").text(value)
        })
    })
}

// populate table with the data
populateTable(data)

//search box
var button = d3.select("#filter-btn");
