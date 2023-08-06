const arrayOfObjects = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: { city: "New York", street: "123 Main St" },
        children: [
            { name: "Alice", age: 5 },
            { name: "Bob", age: 8 }
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        address: { city: "Los Angeles", street: "456 Elm St" },
        children: [
            { name: "Eva", age: 3 },
        ]
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 45,
        address: { city: "Chicago", street: "789 Oak St" },
        children: []
    },
    {
        id: 4,
        name: "Emily Williams",
        age: 35,
        address: { city: "Houston", street: "1010 Maple Ave" },
        children: [
            { name: "Oliver", age: 12 },
            { name: "Sophia", age: 10 },
            { name: "Lucas", age: 7 }
        ]
    },
    {
        id: 5,
        name: "Daniel Brown",
        age: 40,
        address: { city: "San Francisco", street: "222 Pine St" },
        children: [
            { name: "Lily", age: 6 },
        ]
    }
];


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor =  r * 0.299 + g * 0.587 + b * 0.114
    if(newColor > 186) {
        newColor = 'black';
    } else {
        newColor = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}


for (const obj of arrayOfObjects) {
    let box = document.createElement("div");
    box.id = "box";
    box.style.height = "18vw"
    box.style.width = "12vw"
    box.style.border = "solid black 4px"
    box.style.backgroundColor = randomColor()
    
    let h1 = document.createElement('h1')
    h1.textContent = obj.name
    
    let h2 = document.createElement('h2')
    h2.textContent = obj.age
    
    let h4 = document.createElement('h4')
    h4.textContent = obj.address.city +', '+ obj.address.street
    
    box.append(h1,h2, h4);
    document.body.appendChild(box)
}











