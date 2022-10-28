// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


const usernames = []


if(usernames.length < 1 || usernames == undefined){
    console.log(' We need to find some users!')
}else{
    console.log("Hello! ", + usernames + "thank you for logging in again.")
}