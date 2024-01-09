// singleton object is created using constructor
// Object.create

// object literals

// How to declare symbol

let mySymbol = Symbol("myKey")

//console.log(typeof mySymbol);

const student = {
    name: "Pratik",
    rollNo: "123abc",
    emailID: "123abc@college.com",
    projects: {
        project1: "Holi Website",
        project2: "GYM Website"
    },
    [mySymbol]: "sp",
    "key space": "Method1"

}

//console.log(student);

//There are two ways to access an Objects attribute

// console.log(student.name);      //Method1
// console.log(student["name"]);   //Method2

//But if there are spaces in the key then we cannot call it by method 1.

console.log(student["key space"]);

//We can also modify the student attributes

//console.log(student);
student.name = "Shrivastava"
console.log(student);

//But if we freeze the object then we cannot modify the object

//Object.freeze(student)
student.name = "Pratik"
//console.log(student)

//We can also add functions to the objects
student.myFunction = function(){
    
    console.log(`The function of ${this.name} is to monitor the class`);
}

console.log(student.myFunction());
