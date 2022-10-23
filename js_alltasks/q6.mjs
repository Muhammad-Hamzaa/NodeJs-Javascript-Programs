// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around 
// the name is displayed. Then print the name after striping the white spaces.

const name = ' Hamza';
console.log(name)

const name2 = '\tHamza';
const name3 = '\nHamza';
console.log(name2)
console.log(name3)

console.log(name.replace(/\s/g, ""))

// \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one or more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string

// .replace(/\s+/g, ' ')

const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ')
console.log(sentence)

var string="    GeeksforGeeks     ";
console.log("Before string:"+string+"'");
  
console.log("After string :"+string.trim()+"'");