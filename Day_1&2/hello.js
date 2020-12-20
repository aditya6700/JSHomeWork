// console.log("hello world");
// var a = 10;
// var b = 12;
// var c = a + b;
// console.log("addition of a and b is ",c);

// // ES5
// sub(20,5)  // function calling
// function sub(a,b){   // funciton declration
//     console.log(a-b);
// }

// //  ES6
// var multi = (a,b) => {
//     console.log(a*b)
// };

// multi(10,5);

// var a = 2;
// // let b = 10;
// function add (){
//     var b = 5;
//     ++b;
//     console.log(b,"inside funciton");
// };
// ++a;
// console.log(a,"outside funciton");
// console.log(b,"outside funciton");
// addi();


let myobj = {
    name: "aditya",
    age: 20,
    active: true,
    languages: {
        lan1: "Telugu",
        lan2: "Hindi",
        lan3: "English"
    },
    myfun: function(){
        console.log("inside the object")
        console.log(this.languages.lan3);
    }
}


// console.log(myobj);

// console.log(myobj.name)
// console.log(myobj["age"]);

// myobj.myfun();

// console.log(myobj.languages.lan1)
// console.log(myobj["languages"]["lan2"])

// ASI automatic semicolon inseriton

// let x = 1, y = 2;
// x;
// ++y;
// console.log(x,y);

// const hello = () => {
//     return   
//     {
//         valu: "hi"
//     }
// }

// console.log(hello());


//  null and undefined
// null = it is an assignment value 
// undefined = it is a variable which has been declrared but not assigned
// let a;
// let b = null;
// console.log(a);
// console.log(b);

// arrays
// let arr1 = new Array(1,2,3);
// console.log(arr1);

// let arr2 = [
//     "hello",
//     354,
//     false,
//     {age: 3254},
//     [5,8,5,8]
// ];

// console.log(arr2);

// to find the datatype of an object

// let a = 10;     // number
// let b = 10.2;   // number
// let c = true;   // boolean
// let d = {       //  object
//     name: "hi"
// };
// let e;           // undefined
// let f = null;    // object
// let g = [5,6,8]; //object

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof f);

// let a = 10, b = "10";
// if (a !== b) {
//     console.log("both are equal")
// } else{
//     console.log("both are not equal")
// } 

// console.log(a.toString())
//  '==' compares only for value
//  '===' compares for both value and datatype


//  number methods
// toString()         = converts to string
// toExponential()    = converts to exponention
// toFixed()          = returns a string with specified value after decimal
// toPrecison()       = retruns a string with a specified length

// let a = 12.457;
// b = a.toPrecision(4);
// console.log(b)


// Array Methods
// 1. arr.toString()   =  converts to string
// 2. arr.join(<value>) = returns a string

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// console.log(arr1)
// let a = arr1.toString();
// console.log(a)

// let a = arr1.join('***');
// console.log(a)

// // 3. concatination
// let a = arr1.concat(arr2);
// console.log(a)

// let myarr = ["html", "css", "sass", "js", 
//     "reactjs", "nodejs", "express", "sql"];

// myarr.pop() // removes last element

// myarr.push("mongodb")  // adds value at the last

// myarr.shift()  // removes first element

// myarr.unshift("MERN");  // add element at the starting

// delete myarr[3];  // deletes only the data

// myarr.reverse();  // reverse of an array

// myarr.sort();  // sorts according to ASCII

// console.log(myarr.length)

// let myarr2 = myarr.slice(2,6);
// console.log(myarr);
// console.log(myarr2);

// myarr[1] = "bootstrap" // to update a value
// console.log(myarr)

// CRUD  operation
// C = create
// R = read
// U = update
// D = delete


// ** splice **
//  splice(<start>,<delete_count>,<new_data>)
//  always returns the deleted elements

// let arr = ['a','d','i','t','y','a'];

// // adding new data
// let a = arr.splice(1,0,"js");

// // updating data
// let b = arr.splice(2, 2, "hello")

// //deleting elements
// let c = arr.splice(3,1)

// console.log(a,b,c)


// let myarr = ["html", "js", "sass", "js", 
//     "reactjs", "nodejs", "js", "sql"];

// indexOf()  returns index of the first occurance of the value
// console.log(myarr.indexOf("js"))

// lastIndexOf()  returns index of the last occurance of the value
// console.log(myarr.lastIndexOf("js"))


// Date

// var mydate = new Date();

// console.log("date",mydate.getDate());
// console.log("time",mydate.getTime());
// console.log("year",mydate.getFullYear());
// console.log("month",mydate.getMonth());
// console.log("day",mydate.getDay());
// console.log("hour",mydate.getHours());
// console.log("minute",mydate.getMinutes());
// console.log("second",mydate.getSeconds());

// console.log("string date",mydate.toDateString());
// console.log("string time",mydate.toTimeString());
// console.log('\n')
// console.log("local date - ",mydate.toLocaleDateString());
// console.log("local time - ",mydate.toLocaleTimeString());


// let myarr = ["html", "css", "sass", "js", 
//     "reactjs", "nodejs", "express", "sql"];

//  for loop

// var i = 8
// for(let i = 0; i < 6; i++){
//     console.log(i)
// }
// console.log(i)

// var len = myarr.length;
// for(let i = 0;i < len; i++ ){
//     console.log(myarr[i]);
// }

// // "for of" loop  = returns element
// for(let i of myarr){
//     console.log(i)
// }

// "for in" loop = returns index
// for(let i in myarr){
//     console.log(i)
// }

// var languages = {
//     lan1: "Telugu",
//     lan2: "Hindi",
//     lan3: "English"
// };

// for(let i in languages){
//     console.log(languages[i])
// }

// // string literals  ``
// let myname = "javascript";
// let age = 20
// console.log(`my name is ${myname} and my age is ${age} `)

let myarr = [1,5,2,25,82,24,12,56,78];

// let newarr = myarr.find((ele, ind, arr) => {
//     return ele > 10
// })
// console.log(newarr)

// let newarr = myarr.findIndex((ele, ind, arr) => {
//     return ele > 10
// })
// console.log(newarr)

// let newarr = myarr.filter((ele) => {
//     return ele > 50
// })

// console.log(newarr)

// forEach()

// myarr.forEach((ele,ind,arr) => {
//     console.log(`element in array is ${ele} and index is ${ind} and array is ${arr}`);
// })

// let arr2 = ["html", "css", "sass", "js", 
//     "reactjs", "nodejs", "express", "sql"];

// let mydata = ""
// arr2.forEach((ele) => {
//     mydata+=ele
// })

// console.log(mydata)

// console.log(myarr);
// let arr5 = myarr.map((ele) => {
//     return ele*10
// })
// console.log(arr5);

// // reduce(<value>,<element>,<index>,<array>)
// // operates from left to right
// let arr6 = [25,10,2,6]
// let res = arr6.reduce((value,ele)=>{
//     console.log(value)
//     return value+ele
// },50)
// console.log(res)

// // reduceRight(<value>,<element>,<index>,<array>)
// // operates from right to left
// console.log("\n")
// let arr7 = [25,10,2,6]
// let res1 = arr7.reduceRight((value,ele)=>{
//     console.log(value)
//     return value+ele
// },50)
// console.log(res1)

// "some" and "every"
// let arr6 = [5,7,3,1,10,2,6]
// let res = arr6.every((ele) => {
//     return ele < 11
// })
// console.log(res);

// let arr6 = [5,7,3,1,10,2,6]
// let res = arr6.some((ele) => {
//     return ele > 5
// })
// console.log(res)

// Important functions
// 1. map
// 2. filter
// 3. callback function
// 4. arrow functions
// 5. splice()



// rest operator    "..."
// let sum1 = 0;
// const sum = (...arr) => {
//     console.log(arr);
//     for (let i of arr){
//         sum1+=i
//     }
//     return sum1
// }
// let res = sum(1,2,5,8,96,56,28,25,612,5,2);
// console.log(res)

// const sum = (a,b,c,...myarray) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(myarray)
// }

// let res = sum(1,2,5,8,96,56,23,65,54);



// // spread operator  "..."
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,5,8,9]
// let arr3 = [...arr1,...arr2]
// let arr4 = [arr1,arr2]
// arr2[2] = 23;
// console.log(`${arr3} and ${arr4} new array`);
// console.log(`${arr1} and ${arr2} are original array`);

