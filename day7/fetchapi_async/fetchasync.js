const myData = (index) => {
    const getData = async (index) => {

        try{
            const res = await fetch('https://api.covid19api.com/summary');
            const data = await res.json();
            console.log(data.Countries[index].Country);
        }catch(err){
            console.log(err);
        }
    
    };
    
    getData(index);
    
};

for(let i = 125; i < 129; i++){ 
    myData(i);
}




