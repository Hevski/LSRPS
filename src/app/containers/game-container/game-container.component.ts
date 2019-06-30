import { Component, OnInit, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  @Input() 
  hands = [
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

  playerChoice: Array<any> = [];
  computerChoice: Array<any> = [];
  winner: String;
  winMessage: string = "";
  playerScore: number = 0;
  computerScore: number = 0;
  playing: true;
  
  title: TitleComponent;
  
  constructor() {}
  
  ngOnInit() {
  }
  
  setPlayerChoice(selection){
    this.playerChoice = []
    let matchedChoice = this.hands.find(function (element) {
        return element['name'] === selection;
      });
    this.playerChoice.push(matchedChoice)   
  }
  
  setComputersChoice(){
    this.computerChoice = []
    this.computerChoice.push(this.hands[Math.floor(Math.random() * 5)])
  }

  increasePlayerScore() {
    this.playerScore += 1
  }

  increaseComputerScore() {
    this.computerScore += 1
  }

  checkScoreCapReached(): boolean {
    return this.playerScore === 5 || this.computerScore === 5 ? true : false;
  }

  declareWinner() {
    let scoreCapReached = this.checkScoreCapReached()
    if (scoreCapReached === true) {
      this.checkWinner()
    }
  }

  checkWinner(): string {
    return this.playerScore > this.computerScore ? "Player wins" : "Computer wins"
  }

  playRound(){
    let playerChoice = this.playerChoice[0]["name"]
    let computerChoice = this.computerChoice[0]["name"]
    let computerMessageObject = this.computerChoice[0]["message"]
    if (Object.keys(computerMessageObject).includes(playerChoice)) {
      this.increaseComputerScore()
      return this.computerChoice[0]["message"][playerChoice]
    } else {
      this.increasePlayerScore()
      return this.playerChoice[0]['message'][computerChoice]
    }
  }
  
  playGame(selection) {
    this.setPlayerChoice(selection)
    this.setComputersChoice()
    this.playRound()
    this.declareWinner()
  }
}
