// 6:

function createHeader(a,b,c) {
    const header = document.createElement("h3")
    header.style.color = c
    header.style.fontSize = a
    header.textContent = b
    document.body.appendChild(header)
}
createHeader("400px", "hello", "red")

// 7:

createHeader("400px", "I'm thrilled to study computers!", "red")
createHeader("400px", "so happy to see my growth from day to day", "green")
createHeader("400px", "and i'm defenitly be from the finalists", "lightblue")



