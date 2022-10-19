// Chapter projects
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less 
//than a dynamic number value in your code. Output the result to the user

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const number = Number(prompt("Enter a number: "))
console.log(number)
if(number > 10){
    console.log("Number is greater than 10")
}else if(number == 10){
    console.log("Number is equal to 10")
}else if(number < 10){
    console.log("Number is lesser than 10")
}else{
    console.log("Please enter a number not anything else!")
}