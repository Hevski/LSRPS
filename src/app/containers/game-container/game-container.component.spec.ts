import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContainerComponent } from './game-container.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { ChoiceComponent } from 'src/app/components/choice/choice.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameContainerComponent,
                      TitleComponent,
                      DisplayComponent,
                      ChoiceComponent,
                      ButtonComponent
                    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    component.playerChoice = []
  })

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should start with empty players choice', () => {  
    expect(component.playerChoice.length).toEqual(0);
  })

  xit('should store a players choice', () => {
    component.setPlayerChoice('rock')
    expect(component.playerChoice.length).toEqual(1);
  })

  xit('should only store one player choice', () => {
    component.setPlayerChoice('rock')
    component.setPlayerChoice('sissors')
    expect(component.playerChoice.length).toEqual(1);
  })

  xit('should not generate number outside range', () => {
    const numberArray = [];
    for (let i = 1; i < 100; i++) numberArray.push(component.setComputersChoice());
    const expected = numberArray.filter(element => element > 4 || element < 0);
    expect(expected.length).toEqual(0)
  })

  xit('should start with empty computers choice', () => {
    expect(component.computerChoice.length).toEqual(0);
  })

  xit('should only store one computer choice', () => {
    component.setComputersChoice()
    component.setComputersChoice()
    expect(component.computerChoice.length).toEqual(1);
  })

  xit('should increase player score by one', () => {
    expect(component.playerScore).toEqual(0)
    component.increasePlayerScore()
    expect(component.playerScore).toEqual(1)
  })

  xit('should increase computer score by one', () => {
    expect(component.computerScore).toEqual(0)
    component.increaseComputerScore()
    expect(component.computerScore).toEqual(1)
  })

  xit('should return true if a player score reaches five', () => {
    component.increasePlayerScore()
    component.increasePlayerScore()
    component.increasePlayerScore()
    component.increasePlayerScore()
    component.increasePlayerScore()
    let expected = component.checkScoreCapReached()
    expect(component.playerScore).toEqual(5)
    expect(expected).toBe(true)
  })

  xit('should return true if a computer score reaches five', () => {
    component.increaseComputerScore()
    component.increaseComputerScore()
    component.increaseComputerScore()
    component.increaseComputerScore()
    component.increaseComputerScore()
    let expected = component.checkScoreCapReached()
    expect(component.computerScore).toEqual(5)
    expect(expected).toBe(true)
  })

  xit('when player picks rock and computer picks lizard, player wins', () => {
    component.computerChoice = [{ name: 'lizard', message: { paper: 'Lizard eats Paper', spock: 'Lizard poisons Spock' }}]
    component.setPlayerChoice("rock")
    component.playRound()
    expect(component.winMessage).toEqual('Player wins, Rock crushes Lizard')
    expect(component.playerScore).toEqual(1)
    expect(component.computerScore).toEqual(0)
  })

  xit('when computer picks rock and player picks lizard, computer wins', () => {
    component.computerChoice = [{ name: 'rock', message: { lizard: 'Rock crushes Lizard', scissors: 'Rock crushes Scissors' }}]
    component.setPlayerChoice("lizard")
    component.playRound()
    expect(component.winMessage).toEqual('Computer wins, Rock crushes Lizard')
    expect(component.playerScore).toEqual(0)
    expect(component.computerScore).toEqual(1)
  })

});
