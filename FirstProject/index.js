let text1 = "aeocnowrendkla;ehoghtyaomxzowpqutendkgoxonainlskf;wonxo";
let ball = document.querySelector(".ball");
let box = document.querySelector(".gameBox");
let tex1 = document.querySelector(".text1");
let tex2 = document.querySelector(".text2");
let scoreBox = document.querySelector(".score"); 
let btn = document.querySelector("#btn");
let imgBox = document.querySelector(".imgBox");

ball.style.position = "absolute";
let y = 10;
let i = 0; 
let gameInterval = null;
let isGameRunning = false;

ball.style.display = "none";
tex1.innerHTML = text1[i];
tex2.innerHTML = "";
scoreBox.innerHTML = "Score: 0";

btn.addEventListener("click", () => {
    startup();
});

document.addEventListener("keydown", (e) => {
    if (!isGameRunning) return;

    if (text1[i] === e.key) {
        y = Math.max(0, y - 10); 
        i++; 
        scoreBox.innerHTML = `Score: ${i}`;

        if (i < text1.length) {
            tex1.innerHTML = text1[i];
        } else {
            endGame("Done!");
        }
    }
});

function startup() {
    y = 10;
    i = 0;
    isGameRunning = true;

    if (gameInterval) clearInterval(gameInterval);

    ball.style.display = "block";
    ball.style.top = y + "%";
    tex1.innerHTML = text1[i];
    tex2.innerHTML = "";
    scoreBox.innerHTML = "Score: 0";
    btn.style.display = "none";

    imgBox.classList.add("scrolling");
    yController();
}

function yController() {
    gameInterval = setInterval(() => {
        y += 0.2; 
        ball.style.top = y + "%";
        
        if (y >= 85) {
            endGame("Game Over");
        }
    }, 20);
}

function endGame(message) {
    isGameRunning = false;
    clearInterval(gameInterval);
    
    imgBox.classList.remove("scrolling");
    box.style.border = "10px solid black";
    tex2.innerHTML = message;
    ball.style.display = "none";
    btn.style.display = "block";
    btn.textContent = "restart";
}