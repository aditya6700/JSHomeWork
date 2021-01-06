// -> The setInterval() method, repeatedly calls a function or
//     executes a code snippet, with a fixed time delay between each call.


// -> clearInterval()  used to clear the setInterval method
let i = 0;
// const myFunc = () => {
//     console.log(i);
//     i++;
//     if(i === 10) clearInterval(myINT);
    
// }
let myINT = setInterval(() => {
    console.log(i);
    i++;
    if(i === 6) clearInterval(myINT);
    
},1000);