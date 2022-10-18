//Multi Dimensional Array
// const array1 = [1,2,3];
// const array2 = [array1,array1]
// console.log(array2)
// console.log(array2[0])
// console.log(array2[0][1])


//Objects : Pechan ye hai ky curly bracket jha b honge wo object honge {}
// const student = {
//     rollNumber: "PIAIC1234",
//     firstName: "Hamza",
//     LastName: "Qureshi"
// }
// console.log(student.rollNumber)
// console.log(student.firstName)

//we can update the object value same as arrays
// student.rollNumber = "PIAIC2312"
// console.log(student.rollNumber)

//If we have initially, array, we can add object in it and vice versa adn we can also do nested objects or arrays
//Now, we can add array in the objects also as per data structure requirement
const student = {
    rollNumber: "PIAIC1234",
    firstName: "Hamza",
    LastName: "Qureshi",
    courses: ["Web3", "Cloud"],
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}
//to access nested array in object. we do objectname.arrayname[indexnumber]
console.log(student.courses[1]);
//to access nested object in object. we do objectname.objectname.valuename
console.log(student.address.country);

//Chapter 3 complete
