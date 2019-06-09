import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameContainerComponent } from './containers/game-container/game-container.component';
import { TitleComponent } from './components/title/title.component';
import { PlayerComponent } from './components/player/player.component';
import { DisplayComponent } from './components/display/display.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { ButtonComponent } from './components/button/button.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameContainerComponent,
        TitleComponent,
        PlayerComponent,
        DisplayComponent,
        ChoiceComponent,
        ButtonComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock Paper Scissors Lizzard Spock!');
  });
});
