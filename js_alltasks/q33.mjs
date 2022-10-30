// Ordinal Numbers
// Ordinal numbers are the numbers that talk about the position of objects.
// For example, 'The cookies are kept in the 3rd drawer from the top',
// 'The orange dress is the 7th one from the right', 'The soccer ball is kept in the 3rd carton from the left'.
// All these sentences have one thing in common - they talk about the positions of the objects.

// What are Ordinal Numbers?
// An ordinal number is a number that indicates the position or order of something in relation to other numbers,
// like, first, second, third, and so on. This order or sequence may be according to the size, importance, or any chronology.
// Let us understand the ordinal numbers with an example. Ten students participated in a contest.
// Out of them, the top winners were given medals and were ranked as 1st, 2nd, and 3rd.
// In this case, the positions: 1st, 2nd, and 3rd are ordinal numbers.

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should
//   read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const array_len = ordinal_num.length
for (let a = 0; a < ordinal_num.length; a++) {
  if (ordinal_num[a] === 1) {
    console.log("1st");
  } else if (ordinal_num[a] == 2) {
    console.log("2nd");
  } else if (ordinal_num[a] == 3) {
    console.log("3rd");
  } else if (ordinal_num[a] == 4) {
    console.log("4th");
  } else if (ordinal_num[a] == 5) {
    console.log("5th");
  } else if (ordinal_num[a] == 6) {
    console.log("6th");
  } else if (ordinal_num[a] == 7) {
    console.log("7th");
  } else if (ordinal_num[a] == 8) {
    console.log("8th");
  } else if (ordinal_num[a] == 9) {
    console.log("9th");
  } else {
    console.log(ordinal_num[a] + "th");
  }
}
