// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation 
// that the user is a friend if the name selected is known in the case statements. You 
// can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const name = prompt("Enter a name: ")
switch(name){
    case "Hamza":
        console.log("You are my friend.");
        break
    case "Raza":
        console.log("You are my friend.");
        break
    case "Anus":
        console.log("You are my friend.");
break
    default:
        console.log("You are not my friend!");
}