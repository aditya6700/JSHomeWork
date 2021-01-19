// // Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execution

// myname = "java";
// console.log(myname);
// var myname;

// // How it will be in output during creation phase 

// var myname;
// myname = "java";
// console.log(myname);


// // In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)

// myname = "java";
// console.log(myname);
// let myname;

// //  What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 

// let glo = "welcome "
// const outerFun = () => {
//     let a = "hello ";
//     const innerFun = () => {
//         var b = "how are you ?"
//         console.log(glo+a+b);
//     }
//     // console.log(glo+a+b);
//     innerFun();
// }

// outerFun();

// // What is Closures in JavaScript 

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 

// let glo = "welcome "
// const outerFun = () => {
//     let a = "hello ";
//     const innerFun = () => {
//         let b = "how are you ?"
//         console.log(glo+a+b);
//     }
//     // console.log(glo+a+b);
//     innerFun();
// }

// outerFun();

// // it same like lexical scoping 

// // One more Example 


// const outerFun = (glo) => {
//     let a = "hello ";
//     const innerFun = () => {
//         console.log(glo+a);
//     }
//     return innerFun;
// }

// let myClouser = outerFun("welcome ");
// console.dir(myClouser)

// console.dir => shows the variables in use


// Currying
// Currying is a technique of evaluationg fucntions with multiple arguments, into 
// sequence of funciton with multiple arguments

// const add = (a) => {
//    return (b) => {
//        return function (c) {
//             console.log(a+b+c)
//        }
//    }
// }

// const add = (a) => (b) => (c) => (d) => console.log(a+b+c+d)

// add(5)(6)(4)(5)


// 2020 JS new features

// var cr = 1_00_00_000;
// console.log(typeof cr)

// let ls = 'javascript'
// let newa = ls.replaceAll('a','1');
// console.log(newa)