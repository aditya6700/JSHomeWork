// CALLBACK IN JAVASCRIPT
// -> Callbacks are just the name of a convention for using JavaScript functions.

// -> There isn't a special thing called a 'callback in the JavaScript language, it's just a convention. 
//      Instead of immediately returning some result like most functions, 
// -> Functions that use callbacks take some time to produce a result.
// -> The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, 
//      not right now'. 
// -> Usually callbacks are only used when doing I/O, e.g. downloading things, reading files,
//      talking to databases, etc.

const getData = () => {
     setTimeout(() => {
          console.log('hello')
          let ls = ['js','css','react'];
          setTimeout((ele) => {
               console.log(`frontend language is ${ele}`);
               const obj = {
                    type: "backend",
                    lang: "nodejs"
			   };
               setTimeout((obj) => {
				    obj.database = "MongoDB"
					console.log(`${obj.type} language is ${obj.lang}`);
               },2000,obj)
               
          },2000,ls[2])
     },2000)    
};

getData();
