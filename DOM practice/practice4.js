let myTable = document.getElementById('table')
let tr_th = document.createElement('tr')
let th = document.createElement('th')
th.textContent = "id"
let th1 = document.createElement('th')


th1.textContent = "NAME "
let th2= document.createElement('th')
th2.textContent = "AGE"
let th3= document.createElement('th')
th3.textContent = "SEX"
let th4= document.createElement('th')
th4.textContent = "DELETE"
let id = 206106
const button = document.createElement("button")
button.textContent = "Click here to add to my Table!!"
button.addEventListener('click', () => {
    let userName = document.getElementById('userName');
    let tr = document.createElement('tr')
    let td =  document.createElement('td')
    td.textContent = id 
    id++
    let td1 = document.createElement('td')
    td1.textContent = userName.value
    let td2 = document.createElement('td')
    td2.textContent = age.value
    let td3 = document.createElement('th')
    td3.textContent = gender.value
    let td4 = document.createElement('p')
    let del_button = document.createElement("button")
    td4.appendChild(del_button)
    del_button.textContent = "delete"
    del_button.addEventListener('click', () =>{
        tr.remove()
    })
    myTable.appendChild(tr)
    tr.append(td,td1,td2,td3,td4)
})

document.body.appendChild(myTable)
myTable.appendChild(tr_th)
tr_th.append(th,th1,th2,th3,th4)
document.body.appendChild(button)
