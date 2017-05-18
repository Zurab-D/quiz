import { Component, Input, OnInit } from '@angular/core';

import { IQuestion } from '../../shared/interfaces/quiz';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  @Input() questions: IQuestion[] = [];

  constructor() { }

  ngOnInit() {
  }

}
