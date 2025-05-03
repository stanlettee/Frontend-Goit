let count = 0;
const interval = setInterval(() => {
    count++ 
    console.log('Hello world')
    if (count === 5){
        clearInterval(interval)
    }
}, 1000)