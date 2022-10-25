// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

import PromptSync from "prompt-sync"
const prompt = PromptSync();


const alien_color = ['green', 'yellow', 'red']
const color = prompt("Enter color: ")

if(alien_color.includes(color) && color == 'green'){
      console.log("Player just earned 5 points")
}else if(alien_color.includes(color) && color == 'yellow'){
      console.log("Player just earned 10 points") 
}else if(alien_color.includes(color) && color == 'red'){
      console.log("Player just earned 15 points") 
}else{
    console.log("Color Not Matched")
    console.log("Your score is zero.")
}