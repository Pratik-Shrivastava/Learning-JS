const name = "Pratik"
const repoCount = 50

// console.log(name + repoCount + " Value");
// But this technique is outdated.

//  Now we use backticks, as it supports string interpolation.


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//This is also a way to declare a string.

const gameName = new String('pratik-ps-com')

// console.log(gameName[0]);
// This is a way to access prototype method.
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

//we can also give negative values in slice but if we use negative values in substring then it will 
//by default start from 0.
const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   pratik    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://pratik.com/pratik%20shrivastava"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
/*

*/