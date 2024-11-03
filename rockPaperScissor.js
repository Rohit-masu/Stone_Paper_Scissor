let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
const result = document.querySelector(".action");
let userScore_span = document.querySelector("#user_score");
let compScore_span = document.querySelector("#comp_score");
const restartButton = document.querySelector(".restart_btn");
const gencompChoice = () => {
    let option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    // console.log("Game is Draw");
}

const gameResult = (userWin_result, userChoice ,compChoice) => {
    if (userWin_result) {
   userScore =  userScore + 1;
        userScore_span.innerText = userScore;
        result.innerText =`Congrats you win! your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "darkgreen";
        // console.log("You Win!")
    } else {
     compScore = compScore + 1;
        compScore_span.innerText = compScore ;
        result.innerText =`You loose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
        // console.log("You loose!")
    }
}

const playGame = (option) => {
    // console.log(`Your choice is ${option} `);
    const compChoice = gencompChoice();
    // console.log(`Computer Choice is ${compChoice}`);

    if (option === compChoice) {
        drawGame();
        result.innerText = `It was a Draw! Try again`;
        result.style.backgroundColor =  "#1E555C";
    } else {
        let userWin_result = true;
        if (option === "rock") {
            userWin_result =  (compChoice === "paper") ? false : true;
        } else if (option === "paper") {
            userWin_result = (compChoice === "scissor") ? false:true;
        } else {
            userWin_result = (compChoice === "rock") ? false : true;
        }
        gameResult(userWin_result,option,compChoice);
    }
}

choice.forEach(element => {
    element.addEventListener("click", () => {
        const userChoice = element.getAttribute("id");
        //   console.log(`element was clicked ${userChoice}`);
        playGame(userChoice);
    }
    )
});

restartButton.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result.innerText = "Make Your Move";
    result.style.backgroundColor =  "#1E555C";
});
