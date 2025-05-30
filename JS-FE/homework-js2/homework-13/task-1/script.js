const delay = ms => {
    const promise = new Promise((res) => {
        setTimeout(() => res(ms), ms)
    })
    return promise
}
const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger); 
delay(1000).then(logger); 
delay(4000).then(logger); 
delay(1500).then(logger); 
delay(3000).then(logger); 
delay(2500).then(logger); 
delay(3500).then(logger); 
