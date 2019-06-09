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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with empty players choice', () => {  
    expect(component.playerChoice.length).toEqual(0);
  })

  it('should store a players choice', () => {
    component.setPlayerChoice('rock')
    expect(component.playerChoice.length).toEqual(1);
  })

  it('should only store one player choice', () => {
    component.setPlayerChoice('rock')
    component.setPlayerChoice('sissors')
    expect(component.playerChoice.length).toEqual(1);
  })

  it('should not generate number outside range', () => {
    const numberArray = [];
    for (let i = 1; i < 100; i++) numberArray.push(component.setComputersChoice());
    const expected = numberArray.filter(element => element > 4);
    expect(expected.length).toEqual(0)
  })


});
