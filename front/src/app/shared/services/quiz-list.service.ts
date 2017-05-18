import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { CONFIG } from '../../config';
import { ResponseService } from './response.service';
import { IQuiz } from '../interfaces/quiz';

@Injectable()
export class QuizListService {

  quizzes: IQuiz[] = [];

  constructor(private http: Http,
              private responseService: ResponseService) { }

  getAll(): Observable<IQuiz[]> {
    return this.http
      .get(CONFIG.urls.quizzes)
      .map(this.responseService.extractData)
      .map(quizzes => this.quizzes = quizzes)
      .first()
      .catch(this.responseService.handleError)
    ;
  }

}
