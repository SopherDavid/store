
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
const div1 = document.getElementById('myDiv');
let activate = true;
div1.style.height = '300px';
div1.style.width = '300px';
div1.style.backgroundColor = 'transparent';
power.addEventListener('click', (event) => {
if (activated === true) {
div1.style.backgroundColor = '#CCFFCC';
activated = false;
} else {
div1.style.backgroundColor = 'transparent';
activated = true;
}
});