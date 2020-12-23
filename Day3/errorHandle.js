let a = -10;
let b = 0;


try {
    if(a<0)
        throw new Error("value is less than 0")
} catch (err) {
    console.log(err)
}