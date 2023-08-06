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
