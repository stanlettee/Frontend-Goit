const seconds = document.querySelector('#seconds')
const milliseconds = document.querySelector('#milli')

let milli = 1000 * 30

const timer = setInterval(() => {
    milli--;
    const secs = Math.floor(milli / 1000)
    const mil = milli % 1000
    seconds.innerHTML = secs.toString().padStart(2, '0')
    milliseconds.innerHTML = mil.toString().padStart(3, '00')
    if (secs === 10) {
        document.body.style.backgroundColor = 'red';
    } else if (secs === 0 && mil === 0) {
        alert('Time is up');
        document.body.style.backgroundColor = 'blue';
        clearInterval(timer);
    }
}, 0.1)