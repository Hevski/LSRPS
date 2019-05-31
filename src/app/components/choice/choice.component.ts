import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() classText: string;
  @Input() choiceCallback: Function;

  playerChoice = []

  constructor() { }

  ngOnInit() {
    console.log(typeof this.choiceCallback);
    
  }  
}
