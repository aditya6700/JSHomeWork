// Synchronous
// A synchronous request blocks the client until operation completes
// i.e. browser is unresponsive.
// In such case, javascript engine of the browser is blocked.


const fun2 = () => {
    let start = new Date().getTime();
    while (new Date().getTime() - start < 3000);
        console.log('fun2 started');
}

const fun1 = () => {
    console.log('fun1 started')
    fun2();
    console.log('fun1 ended')
};

// fun1();


// Asynchronous
// An asynchronous request doesn't block the client
// i.e. browser is responsive.
// At that time, user can perform another operations also.
// In such case, javascript engine of the browser is not blocked.


const fun4 = () => {
    setTimeout(()=>{
        console.log('func4 started')
    },3000);

}


const fun3 = () => {
    console.log('fun3 started');
    fun4();
    console.log('fun3 ended');
};

fun3();