const choices = document.querySelectorAll('.choice')
const playerHands = document.querySelectorAll('.player-hand .hand')
const computerHands = document.querySelectorAll('.computer-hand .hand')
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const msgText = document.querySelector('.message')
let playersChoice;
let computerChoice
let playersScore = 0
let computerScore = 0
let msg = ''



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
      updateScoreText()
      updateMsgText()
    }, 1000);

  })
})

function updateMsgText(){
  msgText.innerText = msg
}


function updateScoreText(){
  playerScoreText.innerText = playersScore
  computerScoreText.innerText = computerScore
}

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
        msg = `It's a tie!`
        console.log(msg)
        break;
      case 'paper':
        msg = `Computer wins!`
        console.log(msg)
        computerScore++
        break;
      case 'scissors':
        msg = `Player wins!`
        console.log(msg)
        playersScore++
        break;
    }
  } else if (playersChoice == 'paper'){
    switch (computerChoice) {
      case 'rock':
        msg = `Player wins!`
        console.log(msg)
        playersScore++
        break;
      case 'paper':
        msg = `It's a tie!`
        console.log(msg)
        break;
      case 'scissors':
        msg = `Computer wins!`
        console.log(msg)
        computerScore++
        break;
    }
  } else if (playersChoice == 'scissors'){
    switch (computerChoice) {
      case 'rock':
        msg = `Computer wins!`
        console.log(msg)
        computerScore++
        break;
      case 'paper':
        msg = `Player wins!`
        console.log(msg)
        playersScore++
        break;
      case 'scissors':
        msg = `It's a tie!`
        console.log(msg)
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