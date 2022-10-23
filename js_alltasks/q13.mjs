// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Available Modes of Transportation are : \n1)Car 2)Motorcycle")
const mode = prompt('Enter 1 for Car or 2 for motorcycle: ');
console.log(mode)
const car = ['corolla', 'civic', 'accord']
const corrolla = 'Toyota Corolla is a good compact car.'
const civic = 'The Honda Civic is a good compact car.'
const accord = 'The Honda Accord Reliability Rating is 4.5 out of 5.0, which ranks it 1st out of 24 for midsize cars.'
const motorcycle = ['CG125', 'CD70', 'YBR']
const cg125 = 'The bike is good if you ride it for less than 30 mins.'
const cd70 = 'Honda CD 70. Well, this bike needs no introduction as it is the most popular bike in Pakistan.'
const ybr = 'YBR is best best in its league.' 
if(mode == 1){
    console.log("You can own these cars " + car + '\n')
    console.log(corrolla + '\n' + civic + '\n' + accord)
}else if(mode == 2){
    console.log("You can own these motorcycles " + motorcycle)
    console.log(cg125 + '\n' + cd70 + '\n' + ybr)
}else{
    console.log("Please Enter right choice again")
}
