// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
import { titleCase } from "title-case";

let name1 = 'Hamza';
name1 = name1.toLowerCase()
console.log(name1)
console.log(name1.toUpperCase());

const sentence = 'Hello, i am hamza';

console.log(titleCase(sentence));