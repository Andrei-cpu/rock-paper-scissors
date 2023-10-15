console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
    return userInput
  } else {
    console.log('Error Message: you need to choose between rock, paper or scissors');
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie game!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer win!';
    } else {
      return 'User win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer win!';
    } else {
      return 'User win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Win!';
    } else {
      return 'User win!';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
