const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//even if the value passed to both the symbols are same
// id and anotherId are not same

const bigInteger = 124563n

//Arrays: We define arrays using square brackets

const heroes = ["shaktiman", "naagraj", "doga"]
// console.log(heroes);

const myObj = {
    name: "Pratik",
    age: 21,
}
// console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigInteger);

