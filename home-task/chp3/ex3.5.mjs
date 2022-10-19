// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called friends.
// 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

const people = {
    friends: []
}
let var1 = {
    firstName: "Hamza",
    LastName: "Qureshi",
    id: 1
}
let var2 = {
    firstName: "Ahmed",
    LastName: "Raza",
    id: 2
}
let var3 = {
    firstName: "Maaz",
    LastName: "Ahmed",
    id: 3
}
people.friends.push(var1,var2,var3)

console.log(people)