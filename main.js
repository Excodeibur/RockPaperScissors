 //restarting, following a guide
 const choices = ["rock","paper","scissors"]
 const winners = [];

 function game(){
    //play the game
    //play 5 rounds
    // console based
    for(let i = 0; i <= 5; i++){
        playRound();
    }
    logWins();
 }

 function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
 }

 function playerChoice(){
    //get input from player
    let input = prompt("type rock paper or scissors")
    while(input == null){
        input = prompt("type rock paper or scissors")
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt("type Rock Paper or Scissors. spelling needs to be exact, capitals do not matter");
        while(input == null){
            input = prompt("type rock paper or scissors")
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
 }

 function computerChoice(){
    //get random comp input
    return choices[Math.floor(Math.random() * choices.length)]
 }

 function validateInput(choice){
    return choices.includes(choice);
 }
  
 function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    } else if(
       (choiceP === "rock" && choiceC === "scissors") ||
       (choiceP === "paper" && choiceC === "rock") ||
       (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
 }
function logWins(){
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item=> item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log("Results: ");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
}

 game();
 
 
 
 
 
 

   /*  //switch statement to get the computer choice
     function getComputerChoice(){
         const randNum = Math.floor(Math.random() * 3) + 1;
         switch(randNum){
             case 1:
                 computer = "ROCK";
                 break;
             case 2:
                 computer = "PAPER";
                 break;
             case 3:
                 computer = "SCISSORS";
                 break;
         }
     }
     const getUserChoice = playerSelection =>{
         playerSelection = playerSelection.toLowerCase();
         if (playerSelection === "rock" || playerSelection === "paper" || playerSelection==="scissors"){
             return playerSelection
         }else{
             console.log("error, please enter a valid value");
         }
     }
    

     function playRound(playerSelection, computerSelection){
         if (playerSelection === "rock" && computerSelection === getComputerChoice("Paper")){
             return("Computer Wins, P beats R");
         
             return("dis shit not werkin");
         }
     }
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/
    
