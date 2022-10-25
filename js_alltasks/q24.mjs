// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const name = prompt('Enter your name: ')
if(name == 'hamza'){
    console.log("Yes, you are the team member")
}else if(name !== 'hamza' && name == 'ali'){
    console.log("You are the project manager")
}else(
    console.log("You are not the member of group!")
)


if(name == name.toLowerCase()){
    console.log("you type the correct name ")
}else{
    console.log("type the correct name in lower case")
}


const age = Number(prompt("Enter your age: "));
console.log(typeof age)
const nationality = prompt("Enter your Nationality: ")
if(age >= 20 && name == 'hamza'){
    console.log("You are eligible for national identity card")
}else if(age <=60 || nationality == 'pakistani'){
    console.log("You are eligible for government job in Pakistan")
}else{
    console.log("You are eligible for government job and national identity card in Pakistan")
}

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const age1 = [10,20,30,40,50,60,18,21,22,25,28,35,38,29,39,34,31,24,56,59,57,52]
if(age1.includes(age)){
    console.log('Age matched!')
}else{
    console.log('Age not matched')
}


