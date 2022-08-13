/*******************************
* Variables and Data types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(job);
*/


/*************************************
* Variables mutation and type coercion


console.log(firstName + ' ' + age)
console.log(firstName + ' ' + 'is' + ' ' + age + ' years old. He is a ' + job + '. Is he Married? ' + isMarried)

// variable mutation
age = 'twenty eight';
job = 'Driver';

//alert(firstName + ' ' + 'is' + ' ' + age + ' years old. He is a ' + job + '. Is he Married? ' + isMarried)

//lastName = prompt('What is his last name?')
//alert('His Name is ' + firstName + ' ' + lastName)
console.log(firstName + ' ' + lastName)

let js = 'amazing';
//if (js == 'amazing') alert('JavaScript is Fun!!')
console.log(40 + 8 + 23 - 10);
*/

/*************************************
* Data Types


//Boolean
let javaScriptisFun = true;
console.log(javaScriptisFun);

console.log(typeof (javaScriptisFun))
console.log(typeof 21);
console.log(typeof 'Subhankar')

let myAge = 'twenty';
console.log(typeof myAge);
myAge = 20;
console.log(typeof myAge);

let year // empty variable will hold the value undefined and also type
console.log(year);
console.log(typeof year);

console.log(typeof null); // type of null in JS is object
*/

/************************************
 * Let Const and Var
 

//let is used to declare variable, which will undergo reassignment
let age = 30
age = 31;

// const for values which will not change
const birthYear = 1991;
// birthYear = 1990 - Not legal

var job = 'Programmer' //var is the old way of declaring variables in javsscript before ES6, not to be done now
*/

/***********************
 * Operators - All arithmetic Operator
 * + can be also used as string concatenate operator
 * = assignment operator
 */
const now = 2020;
const ageJonas = now - 2017;
const ageLara = now - 1976;
console.log(ageJonas, ageLara);

console.log(ageJonas * 2, ageLara / 10, 2 ** 3);
console.log((now - 2020) < (now - 2019));

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

/**
 * Strings and template literals
 */

firstName = 'Mark'
age = 20
const jonasNew = `I'm ${firstName} and i am ${age * 2} years old`
console.log(jonasNew)

console.log('String with \n\
multiple \n\
lines')

console.log(`Another
string
with 
multiple 
lines`)

/**
 * Loops
 */

const permitAge = 15
const isOldEnough = permitAge >= 18

if (isOldEnough) {
    console.log(`Can get Dring License`)
} else {
    const yearsLeft = 18 - permitAge
    console.log(`Need to wait another ${yearsLeft} years`)
}
