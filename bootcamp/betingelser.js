// 2
let bool1 = false; // Variable
if(bool1) console.log("Hej verden"); // Hvis true, print text

// 3
let randomNumber = Math.random() * 11; // Variable
console.log(randomNumber); // Print
if(randomNumber > 5){ // If randomNumer er større end 5
    console.log("Højere end 5"); // Print
} else { // Else
    console.log("Lavere end 5"); // Print
}

// 4
randomNumber > 5 ? console.log("Højere end 5") : console.log("Lavere end 5"); // Hvis randomNumber er større end 5, print 'Højere end 5' ellers print 'Lavere end 5'

// 5
let favoritDrik = "Cola"; // Variable
if(favoritDrik == "Cola") { // Hvis favoritDrik er Cola
    console.log("Cola er sødt."); // Print
} else if(favoritDrik == "Faxe") { // Ellers hvis favoritDrik er Faxe
    console.log("Faxe er sødt."); // Print
} else if(favoritDrik == "Pepsi") { // Ellers hvis favoritDrik er Pepsi
    console.log("Pepsi er sødt."); // Print
} else { // Ellers
    console.log(favoritDrik + " er sødt."); // Print favoritDrik er sødt
}

// 6
switch(favoritDrik) { // Switch statement
    case "Cola": // Hvis favoritDrik er Cola
        console.log("Cola er sødt"); // Print
        break; // Break statement
    case "Faxe": // Hvis favoritDrik er Faxe
        console.log("Faxe er sødt"); // Print
        break; // Break statement
    case "Pepsi": // Hvis favoritDrik er Pepsi
        console.log("Pepsi er sødt"); // Print
        break; // Break statement
    default: // Ellers
        console.log(favoritDrik + " er sødt"); // Print
        break; // Break statement
}