/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//created variables to grab the html elements via the getElementById methods. 
let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

//variables for the calculations 
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const feetToMeter = 1 / meterToFeet
const gallonToLiter = 1 /literToGallon
const poundToKilos = 1 / kilogramToPound

//addEventListener for the convertBtn button variable
convertBtn.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value) // Convert input string to a number

// if statement that takes the DOM elements and returns a string message.
    if (isNaN(baseValue)) {
        lengthEl.textContent = "Please enter a valid number!"
        volumeEl.textContent = "Please enter a valid number!"
        massEl.textContent = "Please enter a valid number!"
        return
    }

//DOM elements to display them via the template strings and ${} passing in the baseValue and multiply it by the variables for calculcations and using .toFixed method converts numbers to string and rounded it up (3) 
    lengthEl.textContent = `
    ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`
    
    volumeEl.textContent = `
    ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons |
    ${baseValue} gallon = ${(baseValue * gallonToLiter).toFixed(3)} liters`
   
    
    massEl.textContent = `
    ${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} pounds |
    ${baseValue} pounds = ${(baseValue * poundToKilos).toFixed(3)} kilos`
    
    // resets inputEl.value back to empty string ""
    inputEl.value = ""
})


//eventListener for the inputEl variable for keypress to click enter on your keyboard
inputEl.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
           convertBtn.click()
        } 
}) 

//addEventListener for the inputEl variable the max numbers you can enter is 0-3 
inputEl.addEventListener("input", function() {
        if (inputEl.value.length > 3) {
                inputEl.value = inputEl.value.slice(0, 3)
        }
})




