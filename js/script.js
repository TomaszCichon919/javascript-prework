{
let computerWin = 0;
let playerWin = 0;

function playGame(playerInput){

  clearMessages ();
  clearResult();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function (moveNumber) {
    if(moveNumber == '1'){
      return 'kamień';
    }
    else if (moveNumber == '3'){
      return 'nożyce';
      }
    else if (moveNumber == '2') {
       return 'papier';
    }
    else { return 'invalid input' };

  }
 const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

 const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

 const displayResult = function (argComputerMove, argPlayerMove) {

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
    }
  else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return 'Wygrywa komputer!';
    }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      return 'Wygrywa komputer!';
    }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
     return 'Ty wygrywasz!';
    }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'Ty wygrywasz!';
    }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return 'Wygrywa komputer!';
    }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    return 'Remis!';
    }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    return 'Remis!';
    }
  else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    return 'Remis!';
    }
    else if (argPlayerMove = 'invalid input') {
      return 'Nie ma oszukiwania!';
    }
  
  }

  const result = displayResult (computerMove, playerMove);
  printMessage('Wynik '+ result);
  

    if (result == 'Wygrywa komputer!') {
      computerWin = computerWin +1;
    }
    else if (result == 'Ty wygrywasz!') {
      playerWin = playerWin +1;
    }
    else {console.log (result)};
  
  
 
  printResult (playerWin + ' - '+ computerWin);
  
}

 document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

 document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);;
});

 document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);;
});

}

