//In JS strings can be declared in 2 ways.
//1st way
const name = "Hritvik";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation / template literals.

//2nd Way
// const gameName = new String("io8ide8");
const gameName = new String("io8i-de-8");

//we can use methods with strings

console.log(name[1]);
console.log(gameName.__proto__) // accessing prototype.
//an empty object it returns, but we can see the values in console window.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
//its doesn't matter whether strings are PRIMITIVE or REFERENCE -> strings are mutable.

console.log(gameName.charAt(6)); // character at 6th index.
console.log(gameName.indexOf('o')); //index of o in the given string.

console.log(gameName.substring(0,4)); // doesn't take negative values.

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newString = "      Zorawar  "
console.log(newString.trim()); // removes white spaces


//sometimes we see in URl that spaces are replaced with %20
const url = "https://hitesh.com/hritvik%20singh%20bedi";

console.log(url.replace('%20','-')); //only first appearence.
// dobara likhne vaali koshish mat krio nahi cahlega -> You have already tested.

console.log(url.includes('hitersj'));

console.log(gameName.split('-'))




