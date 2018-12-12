// 1
function opg1(x,y){ // function
    console.log("tal " + x + " gange med tal " + y + " er lig med " + (x*y)); // Print 
}
opg1(1,52); // Function call
opg1(632,25235);  // Function call
opg1(2,3); // function call

// 2
function opg2(x,y) {
    if(isNaN(x) || isNaN(y)) return 0; // Hvis y eller x ikke er et nummer, returner 0
    console.log("tal " + x + " gange med tal " + y + " er lig med " + (x*y)); // Print 
}

opg2(1,52); // Function call
opg2(632,25235);  // Function call
opg2(2,"fa"); // function call

// 3
function opg3(x,y){
    if(isNaN(x) || x == undefined) return 0; // Hvis x ikke er et nummer eller det ikke er givet en værdi, returner 0
    if(isNaN(y) || y == undefined) return 0; // Hvis y ikke er et nummer eller det ikke er givet en værdi, returner 0
    console.log("tal " + x + " gange med tal " + y + " er lig med " + (x*y)); // Print 
}

opg3(1,52); // Function call
opg3(632);  // Function call
opg3(2,4); // function call