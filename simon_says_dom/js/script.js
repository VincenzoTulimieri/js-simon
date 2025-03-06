console.log('ciao vincenzo')

//dichiarazioni di variabili e cattura degli elementi html
const countDownElement = document.getElementById('countdown')
const formElement = document.getElementById('answers-form')
const instructionsElement = document.getElementById('instructions')
const ulElement = document.getElementById('numbers-list')
const inputElement = document.querySelectorAll('input-group')
console.log(inputElement)





// countdown
let count = 3
countDownElement.innerText = count
let countDown = setInterval(function () {
    countDownElement.innerText = count
    count--
    if (count === -1) {
        ulElement.classList.add('d-none')
        formElement.classList.remove('d-none')
        instructionsElement.innerText = `Inserisci i numeri che ricordi (l'ordine non è importante!)`
        clearInterval(countDown)
    }
}, 1000)



