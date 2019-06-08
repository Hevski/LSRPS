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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
