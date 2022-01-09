// funzione numero randomico
function getRandomNumbers(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
// Dichiaro l'array vuoto
let numberList = [];

// output
let outputHtml = document.getElementById('number-list')


alert('Hai 3 secondi per ricordare i numeri')

// creo un while che genera 5  numeri random
while (numberList.length < 5) {
    const random = getRandomNumbers(1,200);
    if (!numberList.includes(random)) {
        numberList.push(random)
    }
}
//  stampo i 5 numeri 
for (let i = 0; i < numberList.length; i++) {
    outputHtml.innerHTML += numberList[i] + ', ';
}


// time out per resettare l'array
setTimeout(function (){
    outputHtml.innerHTML = '';
    
    // dichiaro che i numeri giusti partono da 0
    let giusti = 0;
    // creo un array vuoto dove inserirò le risposte dell'utente
    let inseriti = [];
    
    // creo un timeout dopo aver nascosto i numeri
    setTimeout(function () {

        // apro un for per chiedere 5 numeri all'utente tramite prompt
        for (let x= 0; x < 5;  x++) {
            const userNumber = parseInt(prompt('inserisci un numero'))

            // apro un if come controllo delle risposte 
            if (numberList.includes(userNumber) && !inseriti.includes(userNumber)) {
                giusti++;
            }
            inseriti.push(userNumber);
        }
        // stampo il risultato
        outputHtml.innerHTML ='Te ne ricordi: ' + giusti + '/5';
    }, 1);  


}, 3000)
