// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

import PromptSync from "prompt-sync"
const prompt = PromptSync();


const alien_color = ['green', 'yellow', 'red']
// const alien_color = 'green'  aese be krskte without array kioke srf 1 color ko match krna. 
//array islye use krre kioke q25 me use kia tha to use he direct use krlia. 
const color = prompt("Enter color: ")

if(alien_color.includes(color) && color == 'green'){
       console.log("Player just earned 5 points for shooting the alien")
}else{
    console.log("Player just earned 10 points")
}