// The Fetch API.

// -> The Fetch API provides a fetch() method defined on the window object, 
//     which you can use to perform requests.
// -> This method returns a Promise that you can use to retrieve the response of the request.

const myData = (index) => {
    fetch('http://api.covid19api.com/summary').then((res) => {
    
    // console.log(res);
    return res.json()

    }).then((data) => {

        console.log(data.Countries[index].Country);

    }).catch((err) => {
        console.log(err);
    });
};

for(let i = 25; i < 29; i++){ 
       myData(i);
}

