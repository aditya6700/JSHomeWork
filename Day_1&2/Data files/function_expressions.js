// creating normal function 
function test1(){
    console.log("HI");
}
test1();

// creating a function expression
var test2 = function(){
    console.log("bye");
}
test2();

//calling a function through a function by passing the parameters to it
function calling(fun){
    fun();
}
calling(test1);
calling(test2);
