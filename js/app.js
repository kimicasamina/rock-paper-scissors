const choices = document.querySelectorAll('.choice')
const playerHands = document.querySelectorAll('.player-hand .hand')
const computerHands = document.querySelectorAll('.computer-hand .hand')
let playersChoice;
let computerChoice
let playersScore = 0
let player



// display hands 

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    
    // GET PLAYERS CHOICE
    playersChoice = choice.value

    // GET COMPUTERS CHOICE
    getComputerChoice()

    // CHECK WINNER AND SHOW HANDS AFTER 2 SECONDS
    setTimeout(() => {
      checkWinner(computerChoice, playersChoice)
      showHands()
    }, 1000);

  })
})


function showHands(){
  // SHOW PLAYER HANDS
  if (playersChoice == 'rock'){
    playerHands.forEach(hand => {
      if (!hand.classList.contains('rock')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } else if (playersChoice == 'paper'){
    playerHands.forEach(hand => {
      if (!hand.classList.contains('paper')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } else if (playersChoice == 'scissors'){
    playerHands.forEach(hand => {
      if (!hand.classList.contains('scissors')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } 

  // SHOW COMPUTER HANDS 
  if (computerChoice == 'rock'){
    computerHands.forEach(hand => {
      if (!hand.classList.contains('rock')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } else if (computerChoice == 'paper'){
    computerHands.forEach(hand => {
      if (!hand.classList.contains('paper')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } else if (computerChoice == 'scissors'){
    computerHands.forEach(hand => {
      if (!hand.classList.contains('scissors')){
        hand.style.display = 'none'
      } else {
        hand.style.display = 'flex'
      }
    })
  } 
}

function checkWinner(computerChoice, playersChoice){
  if (playersChoice == 'rock'){
    switch (computerChoice) {
      case 'rock':
        console.log("its a tie")
        break;
      case 'paper':
        console.log("computer wins")
        break;
      case 'scissors':
        console.log("player wins")
        break;
    }
  } else if (playersChoice == 'paper'){
    switch (computerChoice) {
      case 'rock':
        console.log("player wins")
        break;
      case 'paper':
        console.log("its a tie")
        break;
      case 'scissors':
        console.log("computer wins")
        break;
    }
  } else if (playersChoice == 'scissors'){
    switch (computerChoice) {
      case 'rock':
        console.log("computer wins")
        break;
      case 'paper':
        console.log("players wins")
        break;
      case 'scissors':
        console.log("its a tie")
        break;
    }
  }
}

function getPlayersChoice(){
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      playersChoice = choice.value
    })
  })
}

function getComputerChoice(){
  const randNum = Math.floor(Math.random() * 3) + 1
  if (randNum == 1){
    computerChoice = 'rock'
  } else if (randNum == 2){
    computerChoice = 'paper'
  } else if (randNum == 3){
    computerChoice = 'scissors'
  }
}