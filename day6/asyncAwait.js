// Async/await

// -> There's a special syntax to work with promises in a more comfortable fashion,
//     called "async/await”. It's surprisingly easy to understand and use.

// -> The word “async" before a function means one simple thing: a function always
//     returns a promise.

// -> so the async keyword is added to functions to tell them to return a promise rather
//     than directly returning the value

// -> we can use await when calling any function that returns a Promise, including
//     web API functions.

// -> The keyword await makes JavaScript wait until that promise settles and returns
//     its result.


// Method - 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`welcome to MERN`);
        let ls = ['js','css','react'];
        resolve(ls[2])
        // reject('promise failed');
    },2000);
});

// Method - 2
const getData = (front) => {
    return new Promise((resolve, reject) => {
        setTimeout((front) => {
            const obj = {
                type: "backend",
                lang: "nodejs"
           };
        //    resolve(` frontend language is ${front} 
        //    ${obj.type} language is ${obj.lang}`);
        reject('I don\'t know mern');
        },2000,front);
    });
};


const myData = async () => {
    try {
        
        const result = await promise1;
        const res = await getData(result);
        console.log(res)

    } catch (err) {
        console.log(err);
    }
    
}

myData();