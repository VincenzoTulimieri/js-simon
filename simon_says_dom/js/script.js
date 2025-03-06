console.log('ciao vincenzo')

//dichiarazioni di variabili e cattura degli elementi html
const countDownElement = document.getElementById('countdown')
const formElement = document.getElementById('answers-form')
const instructionsElement = document.getElementById('instructions')
const ulElement = document.getElementById('numbers-list')
const inputElement = document.getElementById('input-group')
// variabili imput
const firstInputNumber = document.getElementById('first-number')
const secondInputNumber = document.getElementById('second-number')
const thirdInputNumber = document.getElementById('third-number')
const fourthInputNumber = document.getElementById('fouth-number')
const fifthtInputNumber = document.getElementById('fifth-number')

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

// presa dei dati dell'utente
formElement.addEventListener('submit',function(event){
    event.preventDefault()

    firstInputNumber.value
    secondInputNumber.value
    thirdInputNumber.value
    fourthInputNumber.value
    fifthtInputNumber.value

    console.log(firstInputNumber.value)
    console.log(secondInputNumber.value)
    console.log(thirdInputNumber.value)
    console.log(fourthInputNumber.value)
    console.log(fifthtInputNumber.value)

    if(fifthtInputNumber.value === number() && 
    secondInputNumber.value === number() && 
    thirdInputNumber.value === number() && 
    fourthInputNumber.value === number() && 
    fifthtInputNumber.value === number() ){
        console.log('giusto')
    }else{
        console.log('numeri sbagliati')
    }


    
})


// function
function number() {
    return Math.floor(Math.random() * 50) + 1;
}

