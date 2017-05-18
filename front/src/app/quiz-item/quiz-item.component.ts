import { Component, Input, OnInit } from '@angular/core';

import { IQuiz } from '../shared/interfaces/quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizListItemComponent implements OnInit {

  @Input() quiz: IQuiz;

  constructor() { }

  ngOnInit() {
  }

}
