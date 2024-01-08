// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods



// myArr.push(6)        //--> add 6 to the last 
// myArr.push(7)        //--> add 7 to the last
// myArr.pop()          //--> remove the last element

// myArr.unshift(9)     //--> add 9 to the front, by shifting every element right (costly operation)
// myArr.shift()        //--> remove the 1st element.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// There are two differences between slice and splice.
// 1. In slice, the original array is not manipulated 
//      BUT in splice, spliced elements are removed from the original array.
// 2. In slice, the last indexed element is excluded BUT in splice it is included.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

console.log("--------------------------------------------")

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);