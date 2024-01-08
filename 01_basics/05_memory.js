// All primitive types are stored in stack
// From stack we get a copy of data stored.

// All non-primitive types are stored in heap
// From heap, we get a reference of actual data stored.

//****************Example of stack (we get a copy)***************************//

let myName = "Pratik"
let anotherName = myName
anotherName = "ShrivastavJi"

console.log(myName);
console.log(anotherName);

//****************Example of head (we get a reference)***********************//

const userOne={
    name: "Pratik",
    email: "pratik@google"
}

const userTwo=userOne

userTwo.email="userTwo@google"

console.log(userOne.email);
console.log(userTwo.email);