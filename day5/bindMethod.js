// bind() Method

// ->  using this method, we can bind an object to a common function, so that
//      the function gives different results when its need.

// this method always works with ES5 traditional function not with ES6 arrow function

const movie1 = {
    name: 'anaconda',
    genere: 'survival',
};

const movie2 = {
    name: 'Doctor Strange',
    genere: 'Action',
};

const movie3 = {
    name: 'Hills have eyes',
    genere: 'Thriller',
};



function extras(rating,support){
    console.log(`The movie name is ${this.name} and the genere is ${this.genere} 
    the Rating for this movie is ${rating} and please watch it only ${support}`);
};

m1 = extras.bind(movie1)
m1(6,"on Netflix");

m2 = extras.bind(movie2);
m2(8,"in BlueRay");

m3 = extras.bind(movie3);
m3(7,"on TV")