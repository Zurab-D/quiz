import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { QuizListService } from '../shared/services/quiz-list.service';

@Injectable()
export class QuizResolve implements Resolve<any> {

  constructor(private quizListService: QuizListService) {}

  resolve(route: ActivatedRouteSnapshot) {
    if (!this.quizListService.quizzes.length) {
      return this.quizListService.getAll();
    }
  }
}
