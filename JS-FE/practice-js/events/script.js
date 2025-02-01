const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  const page = document.querySelector("body");

  const green = Math.round(Math.random() * (255 - 0) + 0);
  const yellow = Math.round(Math.random() * (255 - 0) + 0);
  const red = Math.round(Math.random() * (255 - 0) + 0);
  const randomColor = `rgb(${green}, ${yellow}, ${red})`;
  page.style.backgroundColor = randomColor;
});

const formElement = document.querySelector("form")
formElement.addEventListener("submit", (e) => {
  console.log(e.target.elements.login.value);
  e.preventDefault()
  const data = {
    login: e.target.elements.login.value,
    password: e.target.elements.password.value,
    name: e.target.elements.name.value
  }
  console.log(data);
  e.target.elements.login.value = "";
  e.target.elements.password.value = "";
  e.target.elements.name.value = "";
  return data;
})

const textElem = document.querySelector(".text")
const inputElement = document.querySelector("input#test")
const checkboxElement = document.querySelector("input[type=checkbox]")
inputElement.addEventListener("input", (e) => {
  console.log(e.target.value)
  textElem.textContent = e.target.value
})

checkboxElement.addEventListener("change", checkStatus)
function checkStatus(event) {
  const statusCheckbox = event.target.checked
  console.log(statusCheckbox)
  if(statusCheckbox === true) {
    event.target.style.boxShadow = "2px 3px 10px 4px"
  } else {
     event.target.style.boxShadow = "none"
  }
}

inputElement.addEventListener("focus", (e) => {
  e.target.style.boxShadow = "5px 3px 3px 1px"
})

inputElement.addEventListener("blur", (e) => {
  e.target.style.boxShadow = "none"
})

// Події клавіатури ми завжди додаємо на документ або на window на відміну від інших подій.
// document.addEventListener("keydown", (e) => {
//   console.log(e.key)
//   console.log(e.code, "це e.code")
// })

// Змінити фон елементу з id="box" на жовтий якщо користувач натискає клавішу y,
// та на зелений, якщо користувач натискає клавішу g, під час події keydown.
const boxElem = document.querySelector("#box")
document.addEventListener("keydown", (e) => {
  console.log(e.code)
  if(e.code === "KeyY"){
    document.body.style.backgroundColor = "yellow"
  } else if (e.code === "KeyG"){
    document.body.style.backgroundColor = "green"
  } else {
    document.body.style.backgroundColor = "white"
  }
})
console.log(boxElem)

const box = document.querySelector('#box')
box.addEventListener('mousemove', (e) => {
  
})
