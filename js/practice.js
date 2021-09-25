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

// 
if ( a date is entered){
    filter the default data to show only the data entered
};