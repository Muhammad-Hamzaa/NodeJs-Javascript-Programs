// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 7
//   the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const guest_list = ['Hamza,', 'Anus,', 'Raza,']
console.log(guest_list[0]+ "can't come at dinner from guest list")
guest_list.unshift('Ali')
console.log(guest_list[0],"I invite you on dinner at 9:00 clock")
console.log(guest_list[1],"I invite you on dinner at 9:00 clock")
console.log(guest_list[2],"I invite you on dinner at 9:00 clock")
