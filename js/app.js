const choices = document.querySelectorAll('.choice')
const hands = document.querySelectorAll('.player-hand .hand')
let playersChoice;



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
    selectHand()
  })
  
})

function selectHand(){
  hands.forEach(hand => {
    if (!hand.classList.contains(playersChoice)){
      console.log(playersChoice)
      hand.style.display = 'none'
    } else {
      console.log(hand, 'not chosen')
      hand.style.display = 'flex'
  }
})
}

