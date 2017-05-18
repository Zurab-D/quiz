import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IQuiz } from '../shared/interfaces/quiz';
import { QuizListService } from '../shared/services/quiz-list.service';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizEditComponent implements OnInit {

  @Input() quiz: IQuiz;
  private currentQuestionId = 0;
  private showNextButton = false;
  private showEndButton = false;
  private total = '';
  private endBtnClass = 'btn-success';
  private endBtnCaption = 'You are awesome!';
  private disableContent = '';


  constructor(private router: Router,
              private quizListService: QuizListService) {
  }


  ngOnInit() {
    /* this.tmpQuiz = this.route.snapshot.data['quiz'];

    if (this.tmpQuiz) {
        this.quiz = this.tmpQuiz;
    } */

    const arr = this.router.url.split('/').filter(item => !!item);
    if (arr.length > 0) {
      let id = arr[arr.length - 1];
      this.quiz = this.quizListService.quizzes.filter(item => item._id === id)[0];
    }
  }


  clickNext() {
    if (this.currentQuestionId + 1 < this.quiz.questions.length) {
      this.showNextButton = false;
      this.currentQuestionId++;
    } else {
      this.showEndButton = true;
      this.disableContent = 'disable-content';
      if (this.quiz.questions.filter(item => !!item.answerIsCorrect).length != this.quiz.questions.length) {
        this.endBtnClass = 'btn-warning';
        this.endBtnCaption = 'You can better!';
      }
    }
  }

  eventAnswered(flag, arr) {
    this.showNextButton = flag;
    if (!this.showNextButton) {
      this.showEndButton = false;
    };
    this.total = this.quiz.questions.filter(item => !!item.answerIsCorrect).length + ' of ' + this.quiz.questions.length;
  }

  clickEndButton() {
    this.quiz.questions.forEach(item => item.answerIsCorrect = undefined);
  }
}
