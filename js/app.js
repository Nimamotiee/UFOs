// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select('tbody');
// simple js console.log statement
function printHello() {
    console.log('Hello There');
}
// takes two numbers and adds them
function addition(a,b){
    return (a+b);

}
console.log(addition(4,5))


function addition(a,b){
    return(a+b);
}
addition(4,5)

// Funtions can call other functions
function doubleAddition(c,d){
    var total = addition(c,d) * 2;
    return total;
}
doubleAddition(4,5)



function doubleAddition(c,d){
    var total = addition(c,d) * 2;
    return total;
}
doubleAddition(65,34)

function square(num){
    return num ** 2;
}

let square = (num) => num **2;


// simple js log statement
function printHello(){
    return 'hello there!';
}

// og additional function
function addition(a,b){
    return a+b;
}
// converted to an arrow function
addition = (a,b) => a+b;

// original double addition function
function doubleAddition(c,d){
    var total = addition(c,d) * 2;
    return total;
}
// arrowed function same as above
doubleAddition = (c,d) => addition(c,d) *2
doubleAddition(33,25)
let friends = ['Sarah', 'Nima', 'Cindy', 'Kev'];
function listLoop(userList){
    for (var i = 0; i < userList.length; i++){
        console.log(userList[i]);
    }
}

let vegetables = ['carrots', 'peas', 'lettuce', 'tomatoes'];
for (var i = 0; i < vegetables.length; i++){
    console.log('I love' + vegetables[i]);
}

for (var i = 0; i < 5; i++){
    console.log('I am '+ i);
}


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