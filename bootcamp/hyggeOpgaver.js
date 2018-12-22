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