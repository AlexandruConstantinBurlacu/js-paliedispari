// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.




// scelta pari/dispari



const startButton = document.getElementById("start-Button");

startButton.addEventListener("click", function ()  {
    const userChoice = document.getElementById("user-Choice").value;

    const userNumber = document.getElementById("user-Number").value;

    if(userChoice != "pari" && userChoice != "dipari") {
        alert("Hai inserito un valore sbagliato");
    } else {
        if(isNaN(userNumber) || userNumber < 1 || userNumber > 5 ) {
            alert("Numero sbagliato, inserisci numero da 1 a 5");
        } else {
            const computerNumber = generateRandomNumber(5);
    
            const total = userNumber + computerNumber;


            const outcome = isEvenOrOdd(total);


            if(userChoice == outcome) {
                console.log("hai vinto");
            } else {
                console.log("hai perso");
            }
        }
    }

    

});


function generateRandomNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    return randomNumber;
}

function isEvenOrOdd(number) {
    if(number % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}




