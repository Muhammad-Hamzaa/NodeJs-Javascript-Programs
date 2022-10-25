// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. 
// If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. 
// (The version that fails will have no output.)

import PromptSync from "prompt-sync"
const prompt = PromptSync();


const alien_color = ['green', 'yellow', 'red']
const color = prompt("Enter color: ")

if(alien_color.includes(color) && color == 'green'){
    console.log("alien’s color is green")
    console.log("Player just earned 5 points")
}else if(alien_color.includes(color) && color == 'yellow'){
    console.log("alien’s color is yellow")
    // console.log("Player just earned 3 points") ye izafi likha tha apni mrzi se. swl me required nh tha
}else if(alien_color.includes(color) && color == 'red'){
    console.log("alien’s color is red")
    // console.log("Player just earned 2 points") ye izafi likha tha apni mrzi se. swl me required nh tha
}else{
    console.log("Color Not Matched")
    console.log("Your score is zero.")
}

console.log("Pass/Fail Condition Test")
if(color == 'green'){
    console.log("pass")
}else{
    
}