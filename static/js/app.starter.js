// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript cnsole.log statement
//function printHello() {
//    console.log("Hello there!")
//};

//printHello;

// Takes two numbers and adds them
// addition(a, b) {
//    return a + b;
//  }

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    //let city = d3.select("#city_name").property("value");
    //let state = d3.select("#state_name").property("value");
    //let country = d3.select("#country_name").property("value");
    //let shape = d3.select("#shape_name").property("value");
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //if (city) {

     // filteredData = filteredData.filter(row => row.city_name === city);
    //} else{

    //};
    //if (state) {

    //  filteredData = filteredData.filter(row => row.state_name === state);
    //};
    //if (country) {

    //  filteredData = filteredData.filter(row => row.country_name === country);
    //};
    //if (shape) {

    //  filteredData = filteredData.filter(row => row.shape_name === shape);
    //};





    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);