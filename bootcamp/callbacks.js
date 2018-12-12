// 1
function opg1(x){ // function
    console.log(x); // Print 
}

let data = [1,2,3,4,5,6]; // Array
data.forEach(function(element) { // Foreach
    opg1(element); // Function call
})

// 2
function opg2(x, y){ // Function
    let z = "<p>" + x + "</p>"; // Variable
    y(z); // Function call
}

function opg2c(x) { // Function
    console.log(x); // Print
}

opg2("Swoop", opg2c); // Function call