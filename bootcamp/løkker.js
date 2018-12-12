// 2
for (let i = 0; i <= 25; i++) // For loop
    console.log(i); // Print

let x = 0; // Variable
while(x <= 25) console.log(x++); // Print så længe while loopen er sand

let y = 0; // Variable
do { // Do while
    console.log(y++); // Print
} while(y <= 25); // Fortsæt hvis y <= 25

// 3
let opgave3 = 123; // Variable
do { // Do while
    console.log("Hej verden"); // Print
} while(opgave3 == 321); // Fortsæt hvis opgave3 == 321

// 4
for(let opgave4 = 2017; opgave4 >= 1917; opgave4--) // For
    console.log(opgave4); // Print

// 5
let ugeDage = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]; // Array
for(let ugeDageIndex = 0; ugeDageIndex < ugeDage.length; ugeDageIndex++) // For
    console.log(ugeDage[ugeDageIndex]); // Print

// 7
let opgave7 = ["Navn1", "Navn2", "Navn3", "Navn4", "Navn5", "Navn6", "Navn7", "Navn8"]; // Array
opgave7.forEach(function(navn) { // For each
    console.log(navn); // Print
});

// 8
let opgave8 = ["Kunstner1", "Kunstner2", "Kunstner3", "Kunstner4"]; // Array
opgave8.forEach(function(kunstner, index) { // For each
    console.log("[" + index + "] " + kunstner); // Print
});

// 9
let opgave9 = [13,24,53,243,74,24,75,86,13,74]; // Array
opgave9.forEach(function(number, index) { // For each
    if(index == opgave9.length-1) { // Hvis det er det sidste nummer
        console.log(number + " er det sidste nummer"); // Print
    } else { // Else
        if(number == opgave9[index+1]) { // Hvis nummeret er det samme som det næste nummer
            console.log(number + " er lige så stort som " + opgave9[index+1]); // Print
        } else { // Else
            // Hvis nummer er mindre end det næste, print... ellers print..
            number < opgave9[index+1] ? console.log(number + " er mindre end " + opgave9[index+1]) : console.log(number + " er større end " + opgave9[index+1]);
        }
    }
});