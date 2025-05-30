const dateCounting = document.querySelector('#date')
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.container = document.querySelector(selector);
        this.targetDate = targetDate;
        this.days = this.container.querySelector('[data-value="days"]'),
        this.hours = this.container.querySelector('[data-value="hours"]'),
        this.mins = this.container.querySelector('[data-value="mins"]'),
        this.secs = this.container.querySelector('[data-value="secs"]'),
        dateCounting
        this.start();
    }
  
    start() {
        dateCounting.innerHTML = this.targetDate
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            this.updateClock(time);
        }, 1000);
    }
  
    updateClock(time) {
      const daysFloor = Math.floor(time / (1000 * 60 * 60 * 24));
      const hoursFloor = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minsFloor = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secsFloor = Math.floor((time % (1000 * 60)) / 1000);
  
      this.days.innerHTML = daysFloor;
      this.hours.innerHTML = this.writeHtml(hoursFloor);
      this.mins.innerHTML = this.writeHtml(minsFloor);
      this.secs.innerHTML = this.writeHtml(secsFloor);
    }
  
    writeHtml(value) {
      return String(value).padStart(2, '0');
    }
}

const date = document.querySelector('#date')
date.innerHTML

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025'),
  });





  function flip(valueEl, newNumber) {
    const startNumber = parseInt(valueEl.textContent);
    if (newNumber === startNumber) return;
  
    // Створюємо top/bottom частини
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    topFlip.textContent = startNumber;
  
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");
    bottomFlip.textContent = newNumber;
  
    // Коли анімація top починається — змінюємо верхнє число
    topFlip.addEventListener("animationstart", () => {
      valueEl.textContent = newNumber;
    });
  
    // Після закінчення анімацій — прибираємо фліпи
    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });
  
    bottomFlip.addEventListener("animationend", () => {
      bottomFlip.remove();
    });
  
    valueEl.append(topFlip, bottomFlip);
  }

