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

//addEventListener for the convertBtn button variable
convertBtn.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value) // Convert input string to a number

    if (isNaN(baseValue)) {
        lengthEl.textContent = "Please enter a valid number!"
        volumeEl.textContent = "Please enter a valid number!"
        massEl.textContent = "Please enter a valid number!"
        return
    }

    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet`
    volumeEl.textContent = `${baseValue} gallons = ${(baseValue * literToGallon).toFixed(3)} litters`
    massEl.textContent = `${baseValue} lbs = ${(baseValue * kilogramToPound).toFixed(3)} kg`
    
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


