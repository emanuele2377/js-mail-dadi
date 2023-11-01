const inserisciEmail = prompt("Inserisci la tua email");
const email = [ "emanuelekushi@gmail.com", "alessandrograndigmail.com", "mariorossi@gmail.com"];


for (let i = 0; i < email.length; i++) {
    
    const emailCorrente = email[i];

    if (emailCorrente == inserisciEmail)  {
        console.log (" valido")
    }
    
    else {
        console.log ("non valido")
        document.getElementById("container").innerHTML = "utente non autorizzato";
    }
    
    document.getElementById("container").innerHTML = "utente autorizzato";

}

