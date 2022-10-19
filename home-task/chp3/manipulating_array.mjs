// Take the following array: 
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
var newList = theList.shift()
var newList = theList.pop()
var newList = theList.unshift("FIRST")
theList[4] = "hello world"
theList[3] = "MIDDLE"
theList[6] = "LAST"

console.log(theList)


// let arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// // let findValue2 = arr8.find(e => e === 10);
// console.log(findValue);


