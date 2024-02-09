// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: 
// passandole la parola come parametro, farà i suoi calcoli per capire 
// se è palindroma o meno e ci restituirà true o false in base all'esito)


// dico che buttonelement corrisponde al pulsante presente su html
const buttonElement = document.querySelector("#verificaButton");

console.log(buttonElement);

// do una funzione al click del pulsante
buttonElement.addEventListener("click", vediPalindromia);

// funzione per il click del pulsante
function vediPalindromia() {
    const parolaElement = document.querySelector("#inserisciParola");
    const resultElement = document.querySelector("#risultato");

    const parolaScritta = parolaElement.value;

    // gli dico che se non c'e scritto niente allora l'utente deve inserire una parola, altrimenti 
    // controlla se la parola e palindroma attraverso un'altra funzione
    if(parolaScritta === "") {
        resultElement.textContent = "Inserisci una parola"; 
    } else {
        const isPalindroma = controllaPalindromia(parolaScritta);
        resultElement.textContent = isPalindroma ? "La tua parola è palindroma" : "La tua parola non è palindroma";
    }
}

// ora scrivo una funzione per verificare se la parola e palindroma
function controllaPalindromia(parolaScritta) {

    const lunghezzaParola = parolaScritta.length;

    for(let i = 0; i < Math.floor(lunghezzaParola / 2); i++) {
        if (parolaScritta[i] !== parolaScritta[lunghezzaParola - 1 - i]) {
            return false;
        }
    } 
    
    return true;
    


}