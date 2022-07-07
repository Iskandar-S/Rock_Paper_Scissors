let player = 0;
let computer = 0;

function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const result = Math.floor(Math.random() * options.length);
  return options[result];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log('Draw! Replay!');
    return playRound(prompt('Take your pick. Rock, Paper or Scissors?'), computerPlay());
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'Paper') {
      computer++;
      return 'You Lose! Paper covers Rock'
    } else {
      player++;
      return 'You Win! Rock breaks Scissors'
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'Rock') {
      player++;
      return 'You Win! Paper covers Rock'
    } else {
      computer++;
      return 'You Lose! Scissors cuts Paper'
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'Rock') {
      computer++;
      return 'You Lose! Rock breaks Scissors'
    } else {
      player++;
      return 'You Win! Scissors cuts Paper'
    }
  }
}

function declareWinner(player, computer) {
  if (player > computer) {
    return `${player} - ${computer} You win!`
  } else {
    return `${computer} - ${player} You lose!`
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt('Take your pick. Rock, Paper or Scissors?'), computerPlay()))
  }
  console.log(declareWinner(player, computer));
}

game();