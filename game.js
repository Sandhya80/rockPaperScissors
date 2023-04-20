console.log('hi');
const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
   return userInput;
 }  else  {
    return 'Error!';
 }
};
function getComputerChoice(randomNum)  {
  randomNum = Math.floor(Math.random()*3);
  switch(randomNum)  {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    default:
    return 'Error!';
    break;
  }
};
function determineWinner (userChoice, computerChoice)  {
  if (userChoice === computerChoice)  {
   return 'It is a tie!';
  }  
  if (userChoice === 'rock') {        
  if (computerChoice === 'paper') {
    return 'The computer wins!';
  } else  {
    return 'Hooray! You won this game!';
  }  
  }
  if (userChoice === 'paper') {        
  if (computerChoice === 'scissors') {
    return 'The computer wins!';
  } else  {
    return 'Congratulations! You won!';
  }  
  }
  if (userChoice === 'scissors') {        
  if (computerChoice === 'rock') {
    return 'The computer wins!';
  } else  {
    return 'You won the game!';
  }  
  }
};
console.log(determineWinner('paper','scissors'));
console.log(determineWinner('paper','paper'));
console.log(determineWinner('paper','rock'));

const playGame = () =>  {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('Your throw: ' + userChoice);
  console.log('Computer throw: '+ computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};
playGame();