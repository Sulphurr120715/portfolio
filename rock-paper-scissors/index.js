const score = JSON.parse(localStorage.getItem('score'))
        
        
                UpdateScore();
        
        
                function PlayGame(playerMove) {
        
                    const ComputerMove = FindComputerMove();
        
                    let result = ''
        
                    if (playerMove === 'Paper') {
                            if (ComputerMove === 'Paper') {
                        result = 'Tie'
                    } else if (ComputerMove === 'Rock') {  
                        result = 'You win'
                    } else if (ComputerMove === 'Scissors') {
                        result = 'You lose'
                    }
                } else if (playerMove === 'Rock') {
                    if (ComputerMove === 'Paper') {
                        result = 'You lose'
                    } else if (ComputerMove === 'Rock') {
                        result = 'Tie'
                    } else if (ComputerMove === 'Scissors') {
                        result = 'You win'
                    }
                } else if (playerMove === 'Scissors') {
                    if (ComputerMove === 'Paper') {
                        result = 'You win'
                    } else if (ComputerMove === 'Rock') {
                        result = 'You lose'
                    } else if (ComputerMove === 'Scissors') {
                        result = 'Tie'
                    }
                }
        
                if (result === 'You win') {
                    score.wins += 1;
                } else if (result === 'You lose') {
                    score.losses += 1;
                } else if (result === 'Tie') {
                    score.ties += 1;
                };
        
                localStorage.setItem('score', JSON.stringify(score))

               UpdateScore();

               document.querySelector('.js-result').innerHTML = result;

               document.querySelector('.js-moves').innerHTML = `Your move: ${playerMove}, Computer Move: ${ComputerMove}`;
        
                 
                
        
                }



                    function UpdateScore() {
                        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
                    }
        
        
                    function FindComputerMove() { 
        
                    const RandomNumber = Math.random();
                     let ComputerMove = ''
                    if (RandomNumber >= 0 && RandomNumber <  1 / 3) {
                        ComputerMove = 'Paper'
                    } else if (RandomNumber >= 1 / 3 && RandomNumber  < 2 / 3) {
                        ComputerMove = 'Scissors'
                    } else if (RandomNumber >= 0 && RandomNumber < 1) {
                        ComputerMove = 'Rock'
        
                    } return ComputerMove;
        
                    console.log(`ComputerMove is: ${ComputerMove}`);
            }