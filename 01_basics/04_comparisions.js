console.log("2" > 1)
console.log("02" > 1)

console.log(null>0); //false (1)
console.log(null==0); //false (2)
console.log(null >= 0); //true (3)

//The reason is that an equality check == and comparisions > < >= <= works differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null>=0 is true and (1) null > 0 is false.


console.log(undefined>0);
console.log(undefined==0); 
console.log(undefined >= 0);
console.log(undefined<0);

//comparison and equality works differently.
