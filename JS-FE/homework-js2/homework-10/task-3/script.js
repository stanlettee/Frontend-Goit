const button = document.querySelector('.button')
const span = document.querySelector('.click-speed')
const click = document.querySelector('.click')
const time = document.querySelector('.time')
const record = document.querySelector('.record')

let count = 0;
let isPlaying = false;
let timeLeft = 10
let list = []

button.addEventListener('click', () => {
    if (isPlaying === false) {
        isPlaying = true;
        count = 0;
        timeLeft = 10;
        time.textContent = timeLeft;
        click.textContent = count;
      } else {
        count++;
        click.textContent = count;
        if (count === 1){
            interval = setInterval(() => {
                timeLeft--;
                time.textContent = timeLeft;
          
                if (timeLeft === 0) {
                    clearInterval(interval);
                    isPlaying = false;
                    span.textContent = count;
                    timeLeft = 10
                    time.textContent = timeLeft;
                    list.push(count)  
                    let biggest = 0;
                    for (let i = 0; i < list.length; i++){
                        if (list[i] > biggest){
                            biggest  = list[i]
                        }
                    }
                    record.innerHTML = biggest
                }
              }, 1000);
        }
      }
});

