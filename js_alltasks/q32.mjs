// Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.

const current_users = ['hamza', 'raza', 'ali', 'javed', 'adil']
const new_users = ['javed', 'amir', 'raza', 'farrukh', 'noman']

for(let a =0; a<new_users.length; a++){
  let message = "";
  for(let b = 0; b<current_users.length; b++){
    if(current_users[a].toLowerCase() === new_users[b].toLowerCase()){
      message = `${current_users[a]} is Availble in the new list `;
      break;
    }else{
      message = `${current_users[a]} is not available in the new list`;
    }
  }
  console.log(message);
}






// if(new_users[a].toLowerCase() === current_users[b].toLowerCase()){
//   message = `${new_users[a]} is Availble in the new list `;
//   break;
// }else{
//   message = `${new_users[a]} is not available in the new list`;
// }


// for (let a = 0; a < new_users.length; a++) {
//   let message = "";
//   for (let b = 0; b < current_users.length; b++) {
//     if (new_users[a].toLowerCase() === current_users[b].toLowerCase()) {
//       message = `${new_users[a]} is not Availble`;
//       break;
//     } else {
//       message = `${new_users[a]} is Availble to use`;
//     }
//   }
//   console.log(message);
//       }