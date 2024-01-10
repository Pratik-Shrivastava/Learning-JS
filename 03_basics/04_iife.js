// Immediately Invoked Function Expressions (IIFE)

//One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//How do we invoke a function
// function_name() -->> (function_name)() -->> wrap whole function definition inside the parentheses.

// We should also include a semi-colon to mark the end of function.


( (name) => {
    // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')