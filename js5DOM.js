// 1:
const over = document.getElementById('over');


over.addEventListener('mouseover', function MouseOver() {
    over.innerText = "Mouse In"
  });

  over.addEventListener('mouseout', function MouseOut() {
    over.innerText = "Mouse Out"
  });

  over.addEventListener('click', function onClick() {
    over.style.color = 'red'
    over.style.backgroundColor = "yellow"
    over.style.textDecoration = "underline"

  });


// 2:
// const box  = document.getElementById('box');
// box.style.height = "300px";
// box.style.width = "300px";


// // box.addEventListener ('click', function backgroundColor() {
// //     box.style.backgroundColor = "lightblue";
// //     box.style.border = "solid blue 5px"

// // });

const background = document.getElementById('background');

background.addEventListener('change', function() {
const selectedColor = background.value;
box.style.backgroundColor = selectedColor;
});

// A button tha'll turn background on or off
// const box  = document.getElementById('box');
// const button = document.getElementById('myButton')
// box.style.height = "300px";
// box.style.width = "300px";
// let activated = true;


// button.addEventListener('click', (event) => {
//     if (activated === true) {
//     box.style.backgroundColor = 'yellow';
//     activated = false;
//     } else {
//     box.style.backgroundColor = 'red';
//     activated = true;
//     }
// });


const button = document.getElementById('myButton');
const div = document.getElementById('box');
button.addEventListener('click', (event) => {
div.style.height = '100px';
div.style.width = '100px';
div.style.backgroundColor = 'yellow';
});

