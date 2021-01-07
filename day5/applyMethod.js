// apply() Method

//    The apply() method is similar to the call() method.

//    The call() method takes arguments separately. 
//    The apply() method takes arguments as an array.


const movies = {
    name: 'Marvel',
    genere: "Action + Adventure",
    extras: function(rating, support){
        console.log(`one of the best movie series is ${this.name}. This is packed with ${this.genere}. 
        I would like to give rating of ${rating} and please watch it only ${support}`)
    }
};

// movies.extras(9, "in 3D");


const movie2 = {
    name: "Fast and Furious",
    genere: "Action comedy Thriller"
};

movies.extras.apply(movie2,[8,"in Theater"]);

const movie3 = {
    name: 'Hills have eyes',
    genere: 'Thriller',
};

movies.extras.apply(movie3,[6,"in HD"])