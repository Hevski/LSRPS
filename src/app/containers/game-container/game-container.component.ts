import { Component, OnInit, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

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
      this.playerScore = 0
      this.computerScore = 0
    }
  }

  resetGame() {
    this.playerScore = 0
    this.computerScore = 0
    this.winMessage = null
  }

  checkWinner(): string {
    return this.playerScore > this.computerScore ? this.winMessage = "GAME OVER PLAYER WINS!" : this.winMessage = "GAME OVER COMPUTER WINS!"
  }

  playRound(){
    let playerChoice = this.playerChoice[0]["name"]
    let computerChoice = this.computerChoice[0]["name"]
    let computerMessageObject = this.computerChoice[0]["message"]

    if (playerChoice === computerChoice) {
      this.winMessage = 'Its a draw!'
      return
    }
    if(Object.keys(computerMessageObject).includes(playerChoice)) {
      this.increaseComputerScore()
      this.winMessage = 'Computer wins, ' + this.computerChoice[0]["message"][playerChoice]
    } else {
      this.increasePlayerScore()
      this.winMessage = 'Player wins, ' + this.playerChoice[0]['message'][computerChoice]
    }
  }
  
  playGame(selection) {
    this.setPlayerChoice(selection)
    this.setComputersChoice()
    this.playRound()
    this.declareWinner()
  }
}
