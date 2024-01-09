// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//We can also create objects inside an object
// and then we will access them using . operator.

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//How to merge two objects.

// const obj3 = { obj1, obj2 }      // obj2 will be treated as a single object.

//obj1, obj2, obj3, obj4, will be added in {} and returned.
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// ...obj1, ...obj2
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// All the keys will be stored in an array and returned.
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// It is used to check whether a property exits or not.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//De-structuring in objects.
// Curly brases is used for de-structuring.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// instead of course.courseInstructor we can use this syntax,
//We want to extract courseInstructor from course object and assign a new name instructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//This is json
//It is javascript object notation.

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
