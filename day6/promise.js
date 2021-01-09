// PROMISE in JS

// Promises are used to handle asynchronous operations in JavaScript. 

// They are easy to manage when dealing with multiple asynchronous operations where callbacks
// can create callback hell leading to unmanageable code.

// A Promise is an object that keep track about whether a certain event has happened already or not.
// Determines what happens after the events has happend.

// A Promise has Three states:
// fulfilled: Action related to the promise succeeded.
// rejected: Action related to the promise failed.
// pending: Promise is still pending i.e not fulfilled or rejected yet.

// Promises can be consumed by registering functions using .then and .catch methods.

// then()
// then() is invoked when a promise is either resolved or rejected.

// catch()
// catch() is invoked when a promise is either rejected or some error has occurred in execution

// A function to be executed by the constructor, during the process of constructing the promise Obj.
// The executor is custom code that ties an outcome to a promise.

// Method - 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
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


// promise1.then((ls) => {
//     console.log(`welcome to MERN`);

//     getData(ls).then((ele) => {
//         console.log(ele)
//     }).catch((err) => {
//         console.log('in',err)
//     })

// }).catch((err) => {
//     console.log('out',err)
// })

promise1.then((ls) => {

    console.log(`welcome to MERN`);
    return getData(ls)

}).then((ele) => {

        console.log(ele)

}).catch((err) => {

    console.log(err)
    
})

