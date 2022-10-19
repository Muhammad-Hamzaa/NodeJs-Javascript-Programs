//BMI Calculator
//Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the result to the console.
//1 inch is equal to 2.54 cm
//2.2046 pounds is equal to 1 kilo
//Output the results.Then, calculate and log the BMI; this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.
//CodewithHamza90
import PromptSync from "prompt-sync"
const prompt = PromptSync();
// var height = prompt("enter height in inches")
// var height = height * height
// console.log(height)
const height = Number(prompt("Enter height in inches: "))
const weight = Number(prompt("Enter weight in pounds: "))

const heightInCenti = (height * height)
// console.log("Height in Centimeters: " + heightInCenti.toFixed(2))
const weightInKilo = (weight / 2.2046)
// console.log("Weight in Kilograms " + weightInKilo.toFixed(1))

const BMI = weightInKilo/(heightInCenti)
console.log("Your BMI is " + BMI.toFixed(1))
if(BMI < 18.5){
    let category = "Underweight 😒";
    console.log(category)
    
}else if( BMI >= 18.5 && BMI <= 24.9 ){
    let category = "Normal Weight 😍";
    console.log(category)
   
}else if( BMI >= 25 && BMI <= 29.9 ){
    let category = "Overweight 😮";
    console.log(category)

}else{
    let category = "Obese 😱";
    console.log(category)
}
