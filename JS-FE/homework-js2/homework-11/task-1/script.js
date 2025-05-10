const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

let secondsTotal = 60 * 60
const timer = setInterval(() => {
    secondsTotal -= 1

    const hoursTimer = Math.floor(secondsTotal / 3600)
    const minutesTimer = Math.floor(secondsTotal  / 60)
    const secondsTimer = secondsTotal % 60

    hours.innerHTML = hoursTimer.toString().padStart(2, '0')
    minutes.innerHTML = minutesTimer.toString().padStart(2, '0')
    seconds.innerHTML = secondsTimer.toString().padStart(2, '0')

    if (secondsTotal === 1800) {
        alert('30 хвилин пройшло')
    }

    if (secondsTotal <= 0) {
        clearInterval(timer)
    }
}, 1000)