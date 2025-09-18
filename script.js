function rollDice(){
    var randNum1 = Math.floor(Math.random() * 6) +1;
    var randNum2 = Math.floor(Math.random() * 6) +1;

    var image1Path = "images/dice" + randNum1 + ".png"
    var image2Path = "images/dice" + randNum2 + ".png"

    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", image1Path)
    
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", image2Path)

    if (randNum1 > randNum2){
        document.querySelector("h1").textContent = "🥇 Player 1 Wins!";
    } else if (randNum1 < randNum2){
        document.querySelector("h1").textContent = "Player 2 Wins! 🥇";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

document.querySelector(".rollButton").addEventListener("click", rollDice)