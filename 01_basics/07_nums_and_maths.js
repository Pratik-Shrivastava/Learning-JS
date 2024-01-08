const score = 400
// score is implicitly Number
// console.log(score);

//we explicity define that the typeof 100 is Number.
const balance = new Number(100)
// console.log(balance);

// console.log(typeof balance.toString());

// toFixed(x) is used for precesion value i.e. after . x digits.
// console.log(balance.toFixed(10));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(6)); //returns a string
//Here four signifies total digits and NOT after .

const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // comma is included (by default US)
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)