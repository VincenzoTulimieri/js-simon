console.log('ciao vincenzo')

//dichiarazioni di variabili e cattura degli elementi html
const countDownElement = document.getElementById('countdown')
const formElement = document.getElementById('answers-form')
const instructionsElement = document.getElementById('instructions')
const ulElement = document.getElementById('numbers-list')
const inputElement = document.querySelectorAll('#answers-form .form-control')
const messageElement = document.getElementById('message')



// countdown
let count = 30
countDownElement.innerText = count
let countDown = setInterval(function () {
    countDownElement.innerText = --count
    if (count === 0) {
        ulElement.classList.add('d-none')
        formElement.classList.remove('d-none')
        instructionsElement.innerText = `Inserisci i numeri che ricordi (l'ordine non è importante!)`
        clearInterval(countDown)
    }
}, 1000)

// Valore numerico casuale
const numbers = randomNumber()
console.log(numbers)

// creazioni li element
let listItem = '';

for (let i = 0; i < 5; i++) {
    const number = numbers[i]
    listItem += `<li>${number}</li>`
}
ulElement.innerHTML = listItem;




// presa dei dati dell'utente
formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    const userNumber = [];
    for (let i = 0; i < inputElement.length; i++) {
        const currentNumber = inputElement[i]
        const valueNumber = parseInt(currentNumber.value)

        //validazione che i numeri inseriti siano corretti e in caso inserirli nell'array
        if (valueNumber >= 1 && valueNumber <= 50 && !isNaN(valueNumber) && !userNumber.includes(valueNumber)) {
            userNumber.push(valueNumber);
        }
    }
    console.log(userNumber)

    // validazione che tutti i numeri siano stati inseriti
    if (userNumber.length !== 5) {
        messageElement.innerText = 'I numeri inseriti non sono validi'
        return
    }

    //verifica dei numeri ricordati
    const userNumberCorrect = [];
    for (let i = 0; i < userNumber.length; i++) {
        let correctNumber = userNumber[i]
        if (numbers.includes(correctNumber)) {
            userNumberCorrect.push(correctNumber)
        }
    }


    // stampa in pagina del risultato
    if (userNumberCorrect.length > 0) {
        messageElement.classList.remove('text-danger');
        messageElement.classList.add('text-success');
        messageElement.innerText = `Complimenti, hai indovinato ${userNumberCorrect.length} numeri; ${userNumberCorrect}`

    } else {
        messageElement.classList.remove('text-success');
        messageElement.classList.add('text-danger');
        messageElement.innerText = `Mi dispiace, non hai indovinato, Riprova`;
    }




})


// function
function randomNumber() {
    const result = [];

    //   5 numeri random che possono ripetersi
    //    for (let i = 0; i < 5; i++) {
    //         const randomNumber = Math.floor(Math.random() * 50) + 1;
    //         result.push(randomNumber);
    //    }

    //5 numeri random unici
    while (result.length < 5) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!result.includes(randomNumber)) {
            result.push(randomNumber);
        }
    }

    return result
}

