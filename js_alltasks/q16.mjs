// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
//   informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

const guest_list = ['Hamza,', 'Anus,', 'Raza,']
console.log("We have found a bigger dinner table")
guest_list.unshift('Ali,')
guest_list.push('Maaz,')
console.log(guest_list[0],"I invite you on dinner at 9:00 clock")
console.log(guest_list[1],"I invite you on dinner at 9:00 clock")
console.log(guest_list[2],"I invite you on dinner at 9:00 clock")
console.log(guest_list[3],"I invite you on dinner at 9:00 clock")
console.log(guest_list[4],"I invite you on dinner at 9:00 clock")