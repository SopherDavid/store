// 3.

// header
 const head = document.createElement('h1')
 head.textContent = "click any button to change the display"
// creating the box
let box = document.createElement("div");
box.id = "box";
box.style.height = "500px"
box.style.width = "500px"
box.style.border = "solid black 4px"
box.style.backgroundColor = "lightblue";
box.textContent = "Hi there little buddy!";
box.style.color = "green"
box.style.display = "flex"

// Creating the buttons
const topRight = document.createElement("button");
topRight.textContent = "Top right";
topRight.addEventListener('click', () => {
    box.style.alignItems = "flex-start"
    box.style.justifyContent = "end"
});



const topLeft = document.createElement("button")
topLeft.textContent = "Top left";
topLeft.addEventListener('click', () => {
    box.style.alignItems = "flex-start"
    box.style.justifyContent = "start"
});


const bottomRight = document.createElement("button")
bottomRight.textContent = "Bottom right"
bottomRight.addEventListener('click', () => {
    box.style.alignItems = "flex-end"
    box.style.justifyContent = "start"
});

const bottomLeft = document.createElement("button")
bottomLeft.textContent = "Bottom Left";
bottomLeft.addEventListener('click', () => {
    box.style.alignItems = "flex-end"
    box.style.justifyContent = "end"
});


const center = document.createElement("button")
center.textContent = "Center";
center.addEventListener('click', () => {
    box.style.alignItems = "center"
    box.style.justifyContent = "center"
});

const topCenter = document.createElement("button")
topCenter.textContent = "top Center";
topCenter.addEventListener('click', () => {
    box.style.alignItems = "start"
    box.style.justifyContent = "center"
});

const bottomCenter = document.createElement("button")
bottomCenter.textContent = " Bottom center"
bottomCenter.addEventListener('click', () => {
    box.style.alignItems = "end"
    box.style.justifyContent = "center"
});


document.body.append(head, box, topRight, topLeft, bottomRight, bottomLeft, center, topCenter, bottomCenter)
