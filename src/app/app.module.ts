import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { GameContainerComponent } from './containers/game-container/game-container.component';
import { TitleComponent } from './components/title/title.component';
import { DisplayComponent } from './components/display/display.component';
import { ButtonComponent } from './components/button/button.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DisplayContainerComponent } from './containers/display-container/display-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    GameContainerComponent,
    TitleComponent,
    DisplayComponent,
    ButtonComponent,
    ChoiceComponent,
    DisplayContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
