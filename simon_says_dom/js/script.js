console.log('ciao vincenzo')

//dichiarazioni di variabili e cattura degli elementi html
const countDownElement = document.getElementById('countdown')
const formElement = document.getElementById('answers-form')
const instructionsElement = document.getElementById('instructions')
const ulElement = document.getElementById('numbers-list')
const inputElement = document.getElementById('input-group')

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

// creazioni li element con valore numerico casuale
for(let i = 0; i < 5; i++){
    let casualNumbers = number();
    let listItem = document.createElement('li'); 
    listItem.innerText = casualNumbers; 
    ulElement.appendChild(listItem); 
}

formElement.value
console.log(formElement.value)





// function
function number() {
    return Math.floor(Math.random() * 50) + 1;
}

