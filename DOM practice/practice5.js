
const countriesData = [
    {
      name: "Russia",
      capitol: "Moscow",
      attractions: ["Red Square", "Kremlin", "St. Basil's Cathedral"],
      population: 144463451,
      coin: "Ruble",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    },
    {
      name: "France",
      capitol: "Paris",
      attractions: ["Eiffel Tower", "Louvre", "Notre-Dame de Paris"],
      population: 66991000,
      coin: "Euro",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    },
    {
      name: "Germany",
      capitol: "Berlin",
      attractions: ["Brandenburg Gate", "Reichstag building", "Museum Island"],
      population: 83190556,
      coin: "Euro",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    },
    {
      name: "Italy",
      capitol: "Rome",
      attractions: ["Colosseum", "Trevi Fountain", "Pantheon"],
      population: 60390560,
      coin: "Euro",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
    },
    {
      name: "Spain",
      capitol: "Madrid",
      attractions: ["Sagrada Familia", "Alhambra", "Park Güell"],
      population: 46733038,
      coin: "Euro",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    },
    {
      name: "United Kingdom",
      capitol: "London",
      attractions: ["Big Ben", "Tower of London", "Buckingham Palace"],
      population: 67886011,
      coin: "Pound sterling",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    },
];
  
function createTable(data) {
  const table = document.createElement("table")
  
    const thead = document.createElement("thead")
    const topRow = document.createElement("tr")
    const headers = Object.keys(data[0])
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header
      topRow.appendChild(th)
    })

    thead.appendChild(topRow);
    table.appendChild(thead);

    
    
  const tbody = document.createElement("tbody")
    data.forEach((country) => {
      const row = document.createElement("tr");
      Object.values(country).forEach((value) => {
        const td = document.createElement("td");
        if (Array.isArray(value)) {
          td.textContent = value.join(", ");
        } else if (typeof value === "number") {
          td.textContent = value.toLocaleString();
        } else if (typeof value === "string") {
          if (value.startsWith("http")) {
            const img = document.createElement("img");
            img.src = value;
            img.alt = country.name + " flag";
            img.style.maxWidth = "100px";
            td.appendChild(img);
          } else {
            td.textContent = value;
          }
        }
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody)
  
  return table
}
  
const container = document.getElementById("container");
container.appendChild(createTable(countriesData))
  
