// OBJECT DESTRUCTURING

// -> The Destructuring assignment syntax is a JavaScript expression that makes it possible
//     to unpack properties from objects, into distinct variables.

const fullstack = {
    frontEnd: "ReactJS",
    backEnd: "NodeJS",
    middleware: "ExpressJS",
    database: "mongooseJS" 
};

// let a = fullstack.frontEnd;
// let b = fullstack.backEnd;

let {frontEnd, backEnd, middleware, database} = fullstack;


console.log(`In MERN stack 
    M - ${database} 
    E - ${middleware}
    R - ${frontEnd}
    N - ${backEnd}`);

