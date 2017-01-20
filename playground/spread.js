// Spread operator

// function add(a, b) {
//   return a + b;
// }
//
// console.log((add(3,1)));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

// var groupA = ['Jamac', 'Rex',];
// var groupB = ['Qasin', 'Lari',];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Rex', 25];
var personTwo = ['Amal', 23];

function greeting(name, age) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greeting(...personTwo);
greeting(...person);

var names = ['Abukar', 'Ali'];
var allNames = [...names, 'Mo'];
console.log(allNames);

allNames.forEach((name, index) => {
  console.log(`Hi ${name}`)
});
