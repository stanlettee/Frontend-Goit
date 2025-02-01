// Перемістити елемент з id="box" наліво, якщо користувач 
// натискає стрілку вліво, та направо, якщо користувач 
// натискає стрілку вправо, під час події keydown.
// <div id="box"></div>

const box = document.querySelector('#box')
let x = 0;
let y = 0;
document.addEventListener('keydown', (e) => {
    box.style.transform = `translate(${x}px, ${y}px)`
    if (e.code === 'ArrowRight'){
        x += 10
    } else if (e.code === 'ArrowLeft'){
        x -= 10
    } else if (e.code === 'ArrowUp'){
        y -= 10
    } else if (e.code === 'ArrowDown') {
        y += 10
    }
})


// Написати програму яка буде за допомогою миші рухати блок на екрані. 
// Цей код повинен прослуховати подію mousemove на документі та 
// рухати блок на відстань, яку миша змістилася відносно центру блоку.
// Якщо вам потрібно рухати саме центр блоку, ви можете додати до 
// відстані половину ширини та висоти блоку. Можна використати код
// та підказки нижче 👇






const block = document.querySelector('.block');
let blockCoords = this.getBoundingClientRect();

// Додаємо обробник події 'mousemove' на документ
document.addEventListener('mousemove', e => {
  // Отримуємо координати миші на екрані
 
  // Отримуємо координати центра блоку
 
  // Обчислюємо відстань від миші до центру блоку
 
  // Рухаємо блок на відстань, яку
// миша змістилася відносно центру блоку
 });

field.onclick = function(event) {
let fieldCoords = this.getBoundingClientRect();

   // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
   // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
   let ballCoords = {
     top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
   };

   // запрещаем пересекать верхнюю границу поля
   if (ballCoords.top < 0) ballCoords.top = 0;

   // запрещаем пересекать левую границу поля
   if (ballCoords.left < 0) ballCoords.left = 0;


   // // запрещаем пересекать правую границу поля
   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
     ballCoords.left = field.clientWidth - ball.clientWidth;
   }
 // запрещаем пересекать нижнюю границу поля
 if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}