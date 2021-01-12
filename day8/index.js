// console.log('working');

const printData = () => {
  let mydata = document.getElementById('printData').value;
  console.log(mydata);
}

const getData = (event) => {
  event.preventDefault();
  console.log(document.getElementById('inp1').value)
}

const copyData = (event) => {
  event.preventDefault();
  let inp2val = document.getElementById('inp2').value;
  document.getElementById('inp3').value = inp2val;
//   console.log(inp2val)
//   document.getElementById('myform').reset();
}

const streamData = () => {
  let inp4val = document.getElementById('inp4').value;
  document.getElementById('inp5').value = inp4val;
}

let ls = []
const addItem = () => {
  let myval = document.getElementById('listdata').value;
  ls.push(myval);
}

const printArray = () => {
  document.getElementById('mylist').innerText = ls;
}

const clearArray = () => {
  document.getElementById('mylist').innerText = "";
}

const magic = () => {
  // alert('hey you clicke me')
  // confirm('you clicked me right ?');
//  let inpval =  prompt('enter a value');
//  inpval = Number(inpval);
//  inpval = parseInt(inpval)
//  console.log(typeof inpval)
 console.log(window.location.port);
 alert(window.location.hostname)
}

// window.onload = () => {
//   alert('the page is loaded');
// }

let myArr = [
  {
    id: 1,
    name: "sai",
    age: 20,
    phone: 99889
  },
  {
    id: 2,
    name: "sai",
    age: 30,
    phone: 99889
  },
  {
    id: 4,
    name: "sai",
    age: 50,
    phone: 99889
  },
  {
    id: 5,
    name: "sai",
    age: 262,
    phone: 99889
  },
  {
    id: 5,
    name: "sai",
    age: 262,
    phone: 99889
  },
]

const displayData = () =>  {

  let tableData = "";
  myArr.forEach((obj,index) => {
  let curdata = `  <tr>
		<th scope="row">${index+1}</th>
		<td>${obj.name}</td>
		<td>${obj.age}</td>
		<td>${obj.phone}</td>
		<td> <button onclick= "deletedata(${index})"> delete </button> </td>
   </tr> `
   tableData += curdata;
  })

  document.getElementsByClassName('tablebody')[0].innerHTML = tableData;

}

const deletedata = (index) => {
	myArr.splice(index,1);
	displayData();
}

displayData();

//dynamic data entry and localstorage

window.onload = () => {
	let dynaArr = [];
	if(localStorage.getItem('myarr') == null){
		localStorage.setItem('myarr',JSON.stringify(dynaArr))
	};
};


const dynamicDisplay = (disparr = undefined) => {
	let tableData = "";

	let myArr = (disparr == undefined) ? JSON.parse(localStorage.getItem('myarr')) : disparr;

	myArr.forEach((obj,index) => {
	let curdata = `  <tr>
			<th scope="row">${index+1}</th>
			<td>${obj.name}</td>
			<td>${obj.age}</td>
			<td> <button onclick= "dynaDelter(${index})"> delete </button> </td>
	</tr> `
	tableData += curdata;
	})

  document.getElementsByClassName('tablebody3')[0].innerHTML = tableData;
}

dynamicDisplay();

const searchData = (event) => {
	let searchvalue = event.target.value;
	let newarr = JSON.parse(localStorage.getItem('myarr'));

	let modifyarr = newarr.filter((obj) => {
		return obj.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 
	});

	dynamicDisplay(modifyarr);
	
}


const addData = e => {
	e.preventDefault();
	let myobj = {};
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;

	myobj.name = name;
	myobj.age = age;

	let newarr = JSON.parse(localStorage.getItem('myarr'));
	newarr.push(myobj);
	localStorage.setItem('myarr',JSON.stringify(newarr));

	dynamicDisplay();

	document.getElementById('myform3').reset();

}


const dynaDelter = (index) => {

	let newarr = JSON.parse(localStorage.getItem('myarr'));
	newarr.splice(index,1);
	localStorage.setItem('myarr',JSON.stringify(newarr));

	dynamicDisplay();
}


// JSON --- Javascript Object Notaion

const liveSearch = () => {
	let searchval = document.getElementById('search').value;
	console.log(searchval)
	document.getElementById('myimg').src = `https://source.unsplash.com/200x200/?${searchval}`
}

