// Fix koden 1
function opgave1(){
    var navn = "";
    var alder = "";
    var adresse = "";

    var fejlbeskeder = "";

    if (navn == "") {
        fejlbeskeder += "Du skal udfylde navn feltet\n";
    } 
    if (alder == "") {
        fejlbeskeder += "Du skal udfylde alder feltet\n";
    } 
    if (adresse == "") {
        fejlbeskeder += "Du skal udfylde adresse feltet\n";
    }

    console.log(fejlbeskeder);
}

// Fibonacci sekvens
function opgave2(){
    let finished, number = [0.1, 0.2]; // Variabler
    while ((number[number.length-1] <= 1600) && !finished){ // Hvis det nyeste nummer er mindre end 1600 & hvis 'finished' boolean er false
        let newNumber = (number[number.length-1] + number[number.length-2]); // Regn det nye nummer ud
        newNumber > 1600 ? finished = true : number.push(newNumber); // Tjek om det nye nummer er større end 1600, hvis det ikke er så læg det i 'number' array'en
    }
    console.log("Latest number: " + number[number.length-1]); // Print det nyeste nummer
    console.log("Number: " + number); // Print alle numre
}

// Palindromer
function opgave3(text){
    let status;
    let preparedText = text.split(' ').join('').replace('/\s+/g', '').toLowerCase();
    let forward = preparedText.split('');
    let backward = preparedText.split('').reverse();
    for(let i = 0; i < forward.length; i++) {
        forward[i] == backward[i] ? status = true : status = false;
        if(status == false) i = forward.length;
    }
    status ? console.log("[ " + text + " ] er et palindrom.") : console.log("[ " + text + " ] er ikke et palindrom.");
}

// Plum bus
function opgave4(){
    for(let i = 1; i <= 137; i++) {
        let outputText = "";
        if((i%3) == 0) outputText += "Plum ";
        if((i%5) == 0) outputText += "Bus";
        outputText == "" ? console.log(i) : console.log(outputText);
    }
}

// Fix koden 2
function opgave5(){
    var brugernavn = "";
    var password = "";
    var email = "";

    var fejlbeskeder = [];

    if (brugernavn == "") {
        fejlbeskeder[fejlbeskeder.length] = ["Du skal udfylde brugernavn feltet\n"];
    }

    if (password == "") {
        fejlbeskeder[fejlbeskeder.length] = ["Du skal udfylde password feltet\n"];
    }

    if (email == "") {
        fejlbeskeder[fejlbeskeder.length] = ["Du skal udfylde email feltet\n"];
    }

    console.log (fejlbeskeder);
}

// Fix koden 3
function opgave6(){
    function sammensaetTekst (forste, anden) { // Parametrene var forkerte
        return forste + " " + anden; // Der blev returneret 2 strings 'forste' 'anden' istedet for 2 variabler
    }
    
    var resultat = sammensaetTekst ("Mickey", "Mouse");
    
    console.log (resultat); // Forventede resultat: "Mickey Mouse"
}

// BMI
function opgave7(weight, height){
    let bmi = ((weight/(height/100))/(height/100));
    if(bmi < 18.5) console.log("Du er i klassen: undervægtig med en bmi på: " + bmi);
    if(bmi >= 18.5 && bmi < 25) console.log("Du er i klassen: normalvægt med en bmi på: " + bmi);
    if(bmi >= 25 && bmi < 29) console.log("Du er i klassen: overvægtig med en bmi på: " + bmi);
    if(bmi >= 30 && bmi < 39) console.log("Du er i klassen: fedme med en bmi på: " + bmi);
    if(bmi >= 40) console.log("Du er i klassen: svær fedme med en bmi på: " + bmi);
}

// Lig eller ulig
function opgave8(number){
    if(isNaN(number)) return; // Hvis number ikke er et nummer, return
    number%2 == 0 ? console.log(0) : console.log(1);
}

// Roulette Array
function opgave9(number, array) {
    if(isNaN(number) || number == undefined) return;
    if(array == undefined) return;
    if(number > array.length-1) {
        number = Math.random() * array.length-1;
        number = Math.floor(number);
    }
    if(number < 0) number = 0;
    console.log("[" + number +"]" + array[number]);
}

// Fjern mellemrum før eller efter en tekste
function opgave10(text) {
    let temp = text, frontEnd = false, backEnd = false; // String & boolean
    let frontChars = new Array(), backChars = new Array(); // Arrays
    text = text.split(''); // Splitting text into a array
    for(let i = 0; i < text.length; i++) // For loop
        (!frontEnd && text[i] == " ") ? frontChars[frontChars.length] = i : frontEnd = true; // If frontEnd is false & the char is a space, add number to array, else set frontEnd true

    for (let i = text.length-1; i >= 0; i--) // For loop
        (!backEnd && text[i] == " ") ? backChars[backChars.length] = i : backEnd = true; // If backEnd is false & the char is a space, add number to array else set backEnd to true

    for(let i = 0; i < (frontChars.length + backChars.length); i++) // For loop
        i <= (frontChars.length-1) ? text.splice(0,1) : text.splice(text.length-1, 1); // If i is != array length, delete char from start, else delete char from end.

    console.log("[~] Spacing removed.\nBefore: |" + temp + "|\nAfter: |" + (text = text.join('')) + "|"); // Console log
}

// Vinkel 360
function opgave11(number) {
    if(isNaN(number)) return;
    while(number >= 360) number = number - 360;
    while(number < 0) number = number + 360;
    console.log("[~] Vinkel: " + number);
}

// Fartbøden
function opgave12(speed1, speed2, work) { // speed1 - hastighedsbegrænsning | speed2 - målt hastighed | work - vejarbejde
    let workZone = (work != undefined && !isNaN(work) ? work : 1); // Vejarbejde
    let zone1 = [ [51,59,1000], [60,64,1500], [65, 65,2500], [66,69,2500], [70,79,3000], [80,80,3500], [81,84,3500], [85,89,4000], [90,94,4500], [95,99,5500], [100,100,6000], [101,6000] ]; // 50
    let zone2 = [ [81,95,1000], [86,103,1500], [104,104,2500], [105,111,2500], [112,127,3000], [128,128,3500], [129,135,3500], [136,139,4000], [140,143,5000], [144,149,5500], [150,151,6000], [152,159,7000], [160,160,8000], [161,8000] ]; // 80
    let zone3 = [ [111,131,1000], [132,139,1500], [140,142,2500], [143,143,3000], [144,149,3000], [150,153,3500], [154,159,4500], [160,164,4500], [165,169,5000], [170,175,5500], [176,179,6000], [180,186,6500], [187,189,7500], [190,197,8000], [198,199,8500], [200,208,9000], [209,209,10500], [210,219,11000], [220,12500] ]; // 110
    let zone4 = [ [131,139,1000], [140,149,2000], [150,155,2500], [156,159,3000], [160,168,3500], [169,169,4000], [170,179,4500], [180,181,5000], [182,189,5500], [190,194,6000], [195,199,7500], [200,7000] ];
    let zone = ((speed1 == 50) ? zone1 : ((speed1 == 80) ? zone2 : ((speed1 == 110) ? zone3 : zone4)));
    let penalty, penalty1;

    for(let i = 0; i < zone.length; i++) {
        if( (speed2 >= zone[i][0]) && (speed2 <= zone[i][1]) ) penalty1 = zone[i][2];
        if( (speed2 >= zone[i][0]) && (i == (zone.length-1)) ) penalty1 = zone[i][1];
    }

    if(work == 1) penalty1 = penalty1 * 2;

    if((((speed1 / 100) * 100) < speed2) && ((speed1 / 100) * 130) >= speed2  ) {
        penalty = "Fartbøde på " + penalty1 + ".";
    } else if((((speed1 / 100) * 131) <= speed2) && (((speed1 / 100) * 160) >= speed2)) {
        penalty = "Fartbøde på " + penalty1 + " samt klip";
    } else if((((speed1 / 100) * 161) <= speed2) && (((speed1 / 100) * 200) >= speed2)) {
        penalty = "Fartbøde på " + penalty1 + " samt betinget frakendelse 1";
    } else if(speed2 >= 160 && speed2 < 200) {
        penalty = "Fartbøde på " + penalty1 + " samt betinget frakendelse 2";
    } else if( (speed2 > 100) && (((speed1 / 100) * 201) <= speed2) ) {
        penalty = "Fartbøde på " + penalty1 + " samt ubetinget frakendelse 1";
    } else if(speed2 > 200) {
        penalty = "Fartbøde på " + penalty1 + " samt ubetinget frakendelse 2";
    }
    console.log(penalty);
}
opgave12(50, 190, 0);

// Den printer bøde mændge korrekt,
// Rewrite delen med klip, frakendelser osv. så den fungere korrekt.