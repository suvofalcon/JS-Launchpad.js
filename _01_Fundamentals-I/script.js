/*******************************
* Variables and Data types
*/

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

/*************************************
* Variables mutation and type coercion
*/

console.log(firstName + ' ' + age)
console.log(firstName + ' ' + 'is' + ' ' + age + ' years old. He is a ' + job + '. Is he Married? ' + isMarried)

// variable mutation
age = 'twenty eight';
job = 'Driver';

alert(firstName + ' ' + 'is' + ' ' + age + ' years old. He is a ' + job + '. Is he Married? ' + isMarried)

lastName = prompt('What is his last name?')
alert('His Name is ' + firstName + ' ' + lastName)
console.log(firstName + ' ' + lastName)

let js = 'amazing';
if (js == 'amazing') alert('JavaScript is Fun!!')
console.log(40 + 8 + 23 - 10);