// IIFE --- Immediately Invoked Function Expression

// An IIFE is a JavaScript function that runs as soon as it is defined.


// It is a design pattern which is also known as a Self-Executing Anonymous Funciton
// contains two major parts.

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
//  This prevents accessing variables within the IIFE  as well as polluting the global scope.

// The second part creates the immediately invoked function expression () through which the
// JavaScript engină will directly interpret the function.

(() => {
    // const add = () => {
    //     console.log('hello')
    // }
    
    // add();    
    console.log('hello')
})();

