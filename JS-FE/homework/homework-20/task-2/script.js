const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-action='render']");
const destroyButton = document.querySelector("[data-action='destroy']");
const boxesContainer = document.querySelector("#boxes");
function createBoxes(amount){
    boxesContainer.innerHTML = ""
    let divSize = 30
    for (let i = 0; i < amount; i++){
        const newElement = document.createElement('div')
        newElement.style.width = `${divSize}px`
        newElement.style.height = `${divSize}px`
        newElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        boxesContainer.append(newElement)
        divSize += 10
    }
    }
function destroyBoxes(){
    boxesContainer.innerHTML = ""
}
createButton.addEventListener('click', () => {
    createBoxes(Number(input.value))
})
destroyButton.addEventListener('click', () => {
    destroyBoxes()
})
