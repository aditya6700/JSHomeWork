// the following stmt is used to print stmnt on console
// every stmnt must end with an ';'
console.log('hello world');

// creating a variable 
// use let or var to define a variable 
// use of let is much better
// if you want to not change the value use const

let name='aditya';
let fees=1.2;
const amt=258;
console.log(name)     //aditya
console.log(fees)     // 1.2
console.log(amt);      //258
fees=5.5;               //re-assigning
//amt=258;             // error
console.log(fees);  //5.56
console.log("typeof",typeof fees)

//primitive types

let lstname='aditya';  //string literal
let age=20; //numbver literal
let isok= true; //boolean literal
let firstame;  //when nothing is assigned it is undefined
let job=null; //null thre is a nothing

//  java script is a dynamic lkanguage 
// 1. static   wherer once declared a variable can't be changed at run time 
//  sting name='aditya'
// 2.  dynamic it allows to change the variable type at run time 
//   let name='aditya'

//typeof   is used to find the var type
// all are number threr are no floating numbers

//  Reference types
// objects
// Array
// functions

////// creating objects
let person={
    firstname:'aditya',
    ageme:30
};  //  {} describes an object  as dictionmary i n python]

// to change and read the values in objects use .notation
// to change the value dynamically we use bracker notation
person.name='masteroot'
//or
person['name'] = 'masteroot';
console.log(person.name); 

//arrays  -- object
let selectcolors = ['green','blue'];   //array literal 
selectcolors[2] = 'black';   //adding values to array
selectcolors[3] = 147;
console.log(selectcolors);
console.log(selectcolors[0]);
console.log(selectcolors.length);


// Fumnctions

function adi() {          //function declation
// logic for the function
    console.log('this is the part of functiuon logic');
}
adi();  //invoking a function

//adding the paramaters to the functionmo
function aditya(name1) {
    console.log('my name is ' + name1);
}
aditya('masteroot');  //passing arguments

// TYpes of functions
function squres(number){
    return number*number
}
let ans=squres(2);     //or 
console.log(ans)       //console.log(squres(2));


console.log("hell okiran");console.log("hell okiran");


