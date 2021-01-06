// REST operator ---> ... <---
// The rest operator parameter syntax allows us to represent and indefinite
//  number of arguments as an array

const add = (a,b,...values) => {
    console.log(a,b,values)
    let res = 0;
    for (let i of values){
        res+=i;
    }
    return res;
};

// console.log(add(2,3, 5,5,6,5,5));



//  example 2

const sampleFunc = (a,b, ...c) => {
    console.log(`${a}  ${b}`);   // accesing a and b values
    console.log(c);             // c returns an array
    console.log(c[1]);
    console.log(c.length);
    console.log(c.indexOf('cooking'));
    c.forEach((val) => {
        console.log(val);    // printing all the items in c
    });
};

sampleFunc('Time travel','creating paradoxes',
'unveiling mystery','movies','cooking','listening songs')
