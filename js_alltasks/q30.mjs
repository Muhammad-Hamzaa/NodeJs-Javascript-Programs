// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

import PromptSync from "prompt-sync"
const prompt = PromptSync();

const usernames = ['admin', 'manager', 'guard', 'cashier','accountant']
const user = prompt('Enter username: ')


if(usernames.includes(user) && user == 'admin'){
    console.log("Hello admin, would you like to see a status report?")
}else if(usernames.includes(user) && user == 'manager'){
    console.log("Hello Manager, thank you for logging in again.")
}else if(usernames.includes(user) && user == 'guard'){
    console.log("Hello Guard, thank you for logging in again.")
}else if(usernames.includes(user) && user == 'cashier'){
    console.log("Hello Cashier, thank you for logging in again.")
}else if(usernames.includes(user) && user == 'accountant'){
    console.log("Hello Accountant, thank you for logging in again.")
}else{
    console.log("Please Enter correct usernames name only! Thank you.")
}