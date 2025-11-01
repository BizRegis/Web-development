let score =JSON.parse(localStorage.getItem('score')) || {
              wins:0,
              losses:0,
              ties:0
            } 
            // call html js-score paragraph in here
            updateScorePageElement();

            function playGame(playMove){
              const computerMove=pickComputerMove();
              let result='';

              if (playMove==='Scissors'){
                if      (computerMove==='Rock'){
                  result='You lose';
                } else if(computerMove==='Paper'){
                  result='You win';
                } else if (computerMove==='Scissors'){
                    result='Tie';
                  }
                  

              }else if (playMove==='Paper'){
                if (computerMove ==='Rock'){
                  result='You win!';
                }else if (computerMove ==='Paper'){
                  result ='Tie.';
                } else if (computerMove ==='Scissors'){
                  result ='You lose';
                }


              }else if (playMove==='Rock'){
                if (computerMove === 'Rock'){
                  result = 'Tie';
                }else if (computerMove === 'Paper'){
                  result  = 'You lose';
                } else if (computerMove === 'Scissors'){
                  result = 'You win!';
                }
              }

              if (result === 'You win!') {
                  score.wins=score.wins+1;
              }else if (result ==='You lose'){
                score.losses +=1
              }else if (result === 'Tie'){
                score.ties +=1
              }
              
              localStorage.setItem('score',JSON.stringify(score));
              
              //Update the page by calling created function below
              updateScorePageElement()

              // to link result paragraph with script by updating it after getting result
              document.querySelector('.js-result').innerHTML=result;

              //to link move paragraph with script by updating it after getting move
              document.querySelector('.js-move').innerHTML=`You
              <img src="images/${playMove}-emoji.png" class="css-icon-image">
            <img src="images/${computerMove}-emoji.png" 
                class="css-icon-image">
              Computer`;//help us see imoji after playing game

            }


            function updateScorePageElement(){
              document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Losses:${score.losses}, Ties:${score.ties}`;
            }
            
            function pickComputerMove(){
              const RandomNumber=Math.random();
              let computerMove=''
  
              if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
  
              computerMove='Rock';
              } else if (RandomNumber >= 1 /3 && RandomNumber < 2 / 3){
  
              computerMove='Paper';
              } else if (RandomNumber >= 2 /3 && RandomNumber < 1) {
  
              computerMove='Scissors';
              } 
              return computerMove;
            }