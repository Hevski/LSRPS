import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  hands: [
    {
      name: 'rock',
      message: { 'lizard': 'Rock crushes Lizard', 'scissors': 'Rock crushes Scissors' }
    },
    {
      name: 'paper',
      message: { 'rock': 'Paper covers Rock ', 'spock': 'Paper disproves Spock' }
    },
    {
      name: 'scissors',
      message: { 'lizard': 'Scissors decapitates Lizard ', 'paper': 'Scissors cuts Paper' }
    },
    {
      name: 'lizard',
      message: { 'paper': 'Lizard eats Paper', 'spock': 'Lizard poisons Spock' }
    },
    {
      name: 'spock',
      message: { 'rock': 'Spock vaporizes Rock', 'scissors': 'Spock smashes Scissors' }
    }
  ];

  playerChoice: [];
  compupterChoice: null;
  winner: null;
  playerScore: 0;
  computerScore: 0;
  playing: false;

  title: TitleComponent;

  constructor() {}

  ngOnInit() {}

  setPlayerChoice(event){
    this.playerChoice = event.target.value
  }

  // selectedChoice = 0
  // computersChoice = 2
  // winner = 0

  // function determineWinner () => {
      // if blah > blah
      // set winner to 1
  // }

  // declairWinner
  // 
  //

}
