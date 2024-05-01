//How is data stored in memory and how it is accessed based on that categorisation is done.
// Primitive and Non-Primitive.

//Primitive (Call by value)
// 7 types : Strings, number, Boolean, null, Undefined , Symbol(To make any value unique, symbol is used), BigInt(scientific values or very large values)

// JavaScript is a dynamically typed language, which means that 
// data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false -> because Symbol is used for uniqueness

const bigNumber = 347904824239239485252938543290n
//by applying 'n' in the end we tell compiler that this is a Big Number.

//Reference (Non-Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hritvik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//a function is also a object -> if we study the documnentation it is a Object Function.



