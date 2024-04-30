let score = 33;
let score1 = "33";



console.log(typeof score);
console.log(typeof score1);

let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //output 'number'

//But what if its not A pure number
let score2 = "33abc";
let theValueInNumber = Number(score2);

console.log(theValueInNumber); // NaN
// if the score value = null then op/p will be 0 after coonversion
// if the score value = undefined o/p will be NaN after conversion.
// typeof NaN => number
// People use TYPESCRIPT because JS has no strict checking

let isLoggedIn = "" //false after converting in BOOL
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);


console.log(!!"");