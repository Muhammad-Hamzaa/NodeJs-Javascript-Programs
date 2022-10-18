// const arrays1 = [1, "Hamza", true];
// console.log(arrays1)
// console.log(arrays1[1])
// const daysOfWeek = ["Sun","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log(daysOfWeek[1])
// console.log(daysOfWeek[5])
// console.log(daysOfWeek)
// daysOfWeek[0]= 'Sunday'
// console.log(daysOfWeek[0])

// const daysOfWeek = []
// daysOfWeek.push(1)
// daysOfWeek.push("Sunday")
// daysOfWeek.push("Tuesday")
// daysOfWeek.push(5)
// daysOfWeek.push(6)
// daysOfWeek.push(7)
//in splice: 1 is the position where we have to place value
// 0 is the delete account after insertion that how many values we want to delete
// and then put the value you want to insert and that's it
// daysOfWeek.splice(1,0,"Monday")
// console.log(daysOfWeek)
// console.log(daysOfWeek.length)

//now concat the 2 arrays
// const daysOfWeek2 = ['Wednesday', 'Thursday', 1000]
// const allDays = daysOfWeek.concat(daysOfWeek2)
// console.log(allDays);
// we can add or concatenate more than two arrays also, like
// console.log(daysOfWeek)
// const daysOfWeek1 = ["qureshi"]
// const daysOfWeek2 = ["Raza"]
// const allDays = daysOfWeek.concat(daysOfWeek1,daysOfWeek2)
// console.log(allDays)
// allDays.pop()
// console.log(allDays)

// allDays.shift()
// console.log(allDays)

//by splice, we can delete from a specific position to a specific one
// allDays.splice(2,3) 
// console.log(allDays)

// const daysofWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//unshift method adds new element at the start of the array
// daysofWeek.unshift("Qureshi")


//delete use krne se array ki length km nh hoti lkn value zaror remove hjti hai,
// delete daysofWeek[0]
// console.log(daysofWeek)

//find method
// let classCheck = daysOfWeek.find(e => e ==="Wednesday");
// console.log(classCheck);


// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
//How to sort array in numeric ( Ascending order )
// let num1 = [23,2,45,1,0,32,455,90]
// num1.sort(function(a,b){return a - b});
//Descending order
// num1.sort(function(a,b){return b - a});
// console.log(num1)

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// // If the result is 0 no changes are done with the sort order of the two values.

// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
// You can use this code snippet to experiment with numerically and alphabetically sorting:


//Reverse order of array
// console.log(num1.reverse())