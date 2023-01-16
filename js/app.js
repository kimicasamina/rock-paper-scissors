const choices = document.querySelectorAll('.choice')
const hands = document.querySelectorAll('.player-hand .hand')
const computerHands = document.querySelectorAll('.computer-hand .hand')
let playersChoice;
let computerChoice;

function randomizeComputerChoice(){
  randomNum = Math.floor(Math.random() * 3) + 1
  console.log(randomNum)
  if (randomNum === 1){
    computerChoice = 'rock'
  } else if (randomNum === 2){
    computerChoice = 'paper'
  } else if (randomNum === 3){
    computerChoice = 'scissors'
  }

  selectComputerHand()
  
}

function selectComputerHand(){
  computerHands.forEach(hand => {
    if (!hand.classList.contains(computerChoice)){
      hand.style.display = 'none'
    } else {
      hand.style.display = 'flex'
    }
  })
}

choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.value == 'rock'){
      playersChoice = 'rock'
      // console.log('player choose rock')
    } else if (e.target.value == 'paper'){
      playersChoice = 'paper'
      // console.log('player choose paper')
    } else if (e.target.value == 'scissors'){
      playersChoice = 'scissors'
  
      // console.log('player choose scissors')
    }
    randomizeComputerChoice()
    selectHand()
  })
  
})

function selectHand(){
  hands.forEach(hand => {
    if (!hand.classList.contains(playersChoice)){
      hand.style.display = 'none'
    } else {
      hand.style.display = 'flex'
  }
})
}

