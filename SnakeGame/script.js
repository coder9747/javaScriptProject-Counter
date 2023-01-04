//Game Constants
let inputDir = { x: 0, y: 0 }
const foodSound = new Audio("food.mp3");
const backgroundSound = new Audio("music.mp3");
const gameOver = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
let scoreD = document.querySelector("#score");
let speed = 5;
let score = 0;
let a = 2;
let b = 16;
let lastPaintTime = 0;
let snakeArr = [
    { x: 14, y: 5 },
]
let food = { x: 3, y: 4 };

//game Function 
function isCollide(snakeArray) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x == snakeArr[0].x && snakeArr[0].y == snakeArr[i].y) {
            return (true);
        }
    }
    //If you bump into the wall
    if (snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0) return (true);

    return false;
}
function gameEngine() {
    //Part 1: Updating the snake Array & food; 
    if (isCollide(snakeArr)) {
        gameOver.play();
        backgroundSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over Press Any key to play Again");
        snakeArr = [{ x: 14, y: 5 }];
        // backgroundSound.play();
        score = 0;
        document.querySelector("#score").innerHTML = `score ;${0}`;
        speed = 5;
    }
    //If you have Eaten The food Increament the food and regenerate the food;
    if (snakeArr[0].x == food.x && snakeArr[0].y == food.y) {
        foodSound.play();
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        food.x = Math.round(a + (b - a) * Math.random());
        food.y = Math.round(a + (b - a) * Math.random());
        score++;
        scoreD.innerHTML = "Score : " + score;
        speed++;
    }
    //Moving the Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //Part 2: Display the snake 
    document.querySelector(".board").innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement("div");
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.style.gridRowStart = e.y;
        if (index == 0) 
        {
            snakeElement.classList.add("head");
        }
        else 
        {
            snakeElement.classList.add("snake");
        }
        document.querySelector(".board").appendChild(snakeElement);

    })
    //Display a food;
    let foodEle = document.createElement("div");
    foodEle.style.gridColumnStart = food.x;
    foodEle.style.gridRowStart = food.y;
    foodEle.classList.add("food");
    document.querySelector(".board").appendChild(foodEle);



}
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}









//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
    inputDir = { x: 0, y: 1 };
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            {
                inputDir = { x: 0, y: -1 };
                break;

            }
        case "ArrowDown":
            {
                inputDir = { x: 0, y: 1 };
                break;
            }
        case "ArrowLeft":
            {
                inputDir = { x: -1, y: 0 };
                break;
            }
        case "ArrowRight":
            {
                inputDir = { x: 1, y: 0 }
                break;
            }
    }


})