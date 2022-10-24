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


if(name == 'hamza'){
    console.log("you type the correct name ")
}else{
    console.log("type the correct name in lower case")
}