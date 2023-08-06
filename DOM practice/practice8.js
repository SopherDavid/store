
const button = document.getElementById('button');
button.style.height = "100px"
button.style.width = "300px"
button.style.backgroundColor = "#2BD2AB"
button.style.fontSize = "large"
button.style.border = "solid black 2px"
button.style.borderRadius =  "7px"




button.addEventListener("click", () => {
  const result1 = Math.ceil(Math.random() * 6) 
  console.log(result1)
  const result2 = Math.ceil(Math.random() * 6) 
  console.log(result2)

  const img1 = document.getElementById('2')
  const img2 = document.getElementById('3')

   img1.style.height = "200px"
   img1.style.width = "200px"
   img1.style.backgroundSize = "contain"
   img1.style.backgroundRepeat = "no-repeat"
   img1.style.backgroundPosition = "center center"


   img2.style.height = "200px"
   img2.style.width = "200px"
   img2.style.backgroundSize = "contain"
   img2.style.backgroundRepeat = "no-repeat"
   img2.style.backgroundPosition = "center center"




    let dice1 = result1;
    let dice2 = result2

    if (dice1 === 1) {
      img1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2m3jlcrCN9jE79RNNzpZOVB9yKWIw36scw&usqp=CAU')";
    }
     else if (dice1 === 2) {
        img1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2m3jlcrCN9jE79RNNzpZOVB9yKWIw36scw&usqp=CAU')";
    } else if (dice1  === 3) {
        img1.style.backgroundImage = "url('https://img.freepik.com/free-icon/three-result-dice_318-9261.jpg?w=1060&t=st=1690976105~exp=1690976705~hmac=bc6efdc889c1c1d0ac2079a84813b4339bfa7adb51fe5e2971c5d81d0854af9d')";
    } else if (dice1 === 4) {
        img1.style.backgroundImage = "url('https://thenounproject.com/api/private/icons/2502953/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0')";
    } else if (dice1 === 5) {
        img1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAF7oOeMNw-C4CRWBLS2G5NbnspcJ1zBnFePaUWtwz9AX_XUYVpwJ8dIgfC6wAgA9SPg&usqp=CAU')";
    } else if (dice1 === 6) {
            img1.style.backgroundImage = "url('data:image/png;base64,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')";
    }


    if (dice2 === 1) {
        img2.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2m3jlcrCN9jE79RNNzpZOVB9yKWIw36scw&usqp=CAU')";
    } else if (dice2 === 2) {
        img2.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4l8h24ANTbMSBNzm9ECf6R2wMQWIZ1V6fAqZScaovuSXgrm6TcW1hChUG1LhJLqxutc&usqp=CAU')";
        } else if (dice2  === 3) {
            img2.style.backgroundImage = "url('https://img.freepik.com/free-icon/three-result-dice_318-9261.jpg?w=1060&t=st=1690976105~exp=1690976705~hmac=bc6efdc889c1c1d0ac2079a84813b4339bfa7adb51fe5e2971c5d81d0854af9d')";
        } else if (dice2 === 4) {
            img2.style.backgroundImage = "url('https://thenounproject.com/api/private/icons/2502953/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0')";
        } else if (dice2 === 5) {
            img2.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAF7oOeMNw-C4CRWBLS2G5NbnspcJ1zBnFePaUWtwz9AX_XUYVpwJ8dIgfC6wAgA9SPg&usqp=CAU')";
        } else if (dice2 === 6) {
            img2.style.backgroundImage = "url('data:image/png;base64,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')";
        }

});
