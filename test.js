// 1:
const over = document.getElementById('over');
// A:
over.addEventListener('mouseover', function MouseOver() {
    over.innerText = "Mouse In"
});
// B:
over.addEventListener('mouseout', function MouseOut() {
    over.innerText = "Mouse Out"
});
// C:
over.addEventListener('click', function onClick() {
    over.style.color = 'green'
    over.style.backgroundColor = "lightblue"
    over.style.textDecoration = "underline"
});

// 2:
// A:
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');
let activated = true;
div.style.height = '300px';
div.style.width = '300px';
div.style.backgroundColor = '#CCE5FF';
button.addEventListener('click', (event) => {
if (activated === true) {
div.style.backgroundColor = '#CCFFCC';
activated = false;
} else {
div.style.backgroundColor = '#50D8DC';
activated = true;
}
});

// B:
function selectBackground(){
    let e = document.getElementById("selector");
    let BackgroundValue = e.options[e.selectedIndex].value;
    document.getElementById("myDiv").style["background-color"] = BackgroundValue;
}

// C:
const power = document.getElementById('on/off');
const div = document.getElementById('myDiv');
let activated = true;
div.style.height = '300px';
div.style.width = '300px';
div.style.backgroundColor = 'transparent';
power.addEventListener('click', (event) => {
if (activated === true) {
div.style.backgroundColor = '#CCFFCC';
activated = false;
} else {
div.style.backgroundColor = 'transparent';
activated = true;
}
});






  






