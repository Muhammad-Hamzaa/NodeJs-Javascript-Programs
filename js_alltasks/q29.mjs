// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


import PromptSync from "prompt-sync"
const prompt = PromptSync();

const fruits = ['banana', 'orange', 'apple', 'kivi', 'mango']
const favorite_fruits = prompt('Enter your favorite fruit: ')


if(fruits.includes(favorite_fruits) && favorite_fruits == 'banana'){
    console.log("You really like bananas!")
}else if(fruits.includes(favorite_fruits) && favorite_fruits == 'orange'){
    console.log("You really like oranges!")
}else if(fruits.includes(favorite_fruits) && favorite_fruits == 'apple'){
    console.log("You really like apples!")
}else if(fruits.includes(favorite_fruits) && favorite_fruits == 'kivi'){
    console.log("You really like kivi!")
}else if(fruits.includes(favorite_fruits) && favorite_fruits == 'mango'){
    console.log("You really like mango!")
}else{
    console.log("Please Enter fruits name only! Thank you.")
}