import PromptSync from "prompt-sync";
//const prompt is use to call the function from the imported library
const prompt = PromptSync();

// var name = prompt("What is your name? ");
// console.log(name);

const num = prompt("Enter a number: ");
console.log("Your number + 4 =");
console.log(Number(num)+4);
