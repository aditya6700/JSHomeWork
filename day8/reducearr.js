let numbers = [1,2,3,4,5];

let average = numbers.reduce((curval,ele,index,arr) => {
    debugger;
    let total = ( curval += ele);
    if (index === arr.length-1) return total/arr.length;
	return total;
},0)

console.log(average)