import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { DisplayContainerComponent } from '../display-container/display-container.component';

@NgModule({
  declarations: [
    DisplayContainerComponent,
    TitleComponent,
    ButtonComponent
  ]
})

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  title: TitleComponent;

  constructor() { }

  ngOnInit() {
  }

}
