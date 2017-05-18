import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuizListService } from '../shared/services/quiz-list.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  arr = [];

  hideList = false;

  constructor(private quizListService: QuizListService,
              private router: Router) { }

  ngOnInit() {
    this.quizListService.getAll().subscribe();
    this.arr = this.router.url.split('/').filter(item => !!item);
    this.hideList = !this.arr || (this.arr.length > 0 && this.arr[this.arr.length-1] !== 'quizzes')
  }

}
