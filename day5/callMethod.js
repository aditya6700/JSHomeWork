// Call Method

// -> call() method is a predefined function in jacascript
//      with call() method we can call an object belonging to another object

const movies = {
    name: 'Marvel',
    genere: "Action + Adventure",
    extras: function(rating, support){
        console.log(`one of the best movie series is ${this.name}. This is packed with ${this.genere}. 
        I would like to give rating of ${rating} and please watch it only ${support}`)
    }
};

movies.extras(9, "in 3D");


const movie2 = {
    name: "Fast and Furious",
    genere: "Action comedy Thriller"
};

movies.extras.call(movie2,8,"in Theater");

const movie3 = {
    name: 'Hills have eyes',
    genere: 'Thriller',
};

movies.extras.call(movie3,6,"in HD")