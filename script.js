let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    let options = ["rock" , "paper" , "scissors"];
    const Indx = Math.floor(Math.random() * 3);
    return options[Indx];
    // rock paper scissor
};



const drawGame = () =>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
};

const showWinner = (userWin,userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else{
        
        msg.innerText = `You lose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore++;
        compScorePara.innerText = compScore;
    }
};


const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
        userWin =  compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    } else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})