// spread()
// -> The spread operator (…) with objects is used to create copies 
//       of existing objects with new or updated values or to make a copy of
//         an object with more properties.


const add = (a,b,c) => {
    console.log(a+b+c)
};

// add(1,2,3)
let arr = [1,2,3];
// console.log(...arr,'',arr)
// add(...arr)

let arr1 = [...arr];
arr1.pop()

console.log(arr,'',arr1)