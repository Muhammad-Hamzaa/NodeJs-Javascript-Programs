import PromptSync from "prompt-sync";
const prompt = PromptSync();

//if we have 4 to 5 conditions, use if else
//if we have more than 4 to 5 conditions, then come to switch case

// let marks = prompt("Enter your Marks ")
// if(marks >= 90){
//     console.log("A+")
// }else if(marks >= 80){
//     console.log("A+")

// }else if(marks >= 70){
//     console.log("A")

// }else if(marks >= 60){
//     console.log("B")

// }else if(marks >= 50){
//     console.log("C")

// }else if(marks >= 40){
//     console.log("D")
// }
// else{
//     console.log("fail")
// }

//Use of ternaray operators
// console.log(marks>=50? "Passed":"failed")
// const result = marks>=50? "Passed":"failed"
// console.log(result)

let isInPakistan = prompt("Are you in Pakistan? ")
const greetings = isInPakistan === "yes"? "Hello Hamza": "Hello Alex"
console.log(greetings)