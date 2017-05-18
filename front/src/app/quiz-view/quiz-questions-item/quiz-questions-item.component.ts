import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit, OnChanges } from '@angular/core';

import { IQuestion } from '../../shared/interfaces/quiz';

@Component({
  selector: 'app-quiz-questions-item',
  templateUrl: './quiz-questions-item.component.html',
  styleUrls: ['./quiz-questions-item.component.css']
})
export class QuizQuestionsItemComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() question: IQuestion = undefined;
  @Output() answered: EventEmitter<any> = new EventEmitter();
  @Output() answerRemoved: EventEmitter<any> = new EventEmitter();
  el: HTMLInputElement = this.elementRef.nativeElement;
  showInputAnswer = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.calcShowInputAnswer();
  }


  ngOnChanges() {
    this.calcShowInputAnswer();
  }


  arrayNotEpmty(arr) {
    if (arr) return arr.length > 0;
    return false;
  }


  calcShowInputAnswer() {
    this.showInputAnswer = this.arrayNotEpmty(this.question.correctAnswers);
  }


  checkAnswer(answer): boolean {
    if (this.arrayNotEpmty(this.question.answerOptions) && this.arrayNotEpmty(this.question.correctOptions)) {
      return answer.sort().join('') === this.question.correctOptions.sort().join('');
    } else if (this.arrayNotEpmty(this.question.answerOptions) && this.question.correctOption) {
      return +answer[0] === this.question.correctOption;
    } else if (this.arrayNotEpmty(this.question.correctAnswers)) {
      return !!(~this.question.correctAnswers.map(item => item.toLowerCase()).indexOf(answer[0].toLowerCase()));
    }
  }


  inputAnswer(elem) {
    if (elem) {
      elem.setAttribute('value', elem.value);
    }

    let changedInputs = this.el.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked, input[type="text"]:not([value=""])');
    changedInputs = [].map.call(changedInputs, item => item.getAttribute('data-id') || item.value);
    this.question.answerIsCorrect = this.checkAnswer(changedInputs);

    if (changedInputs.length) {
      this.answered.emit(this.question.answerIsCorrect);
    } else {
      this.answerRemoved.emit(this.question.answerIsCorrect);
    }
  }

}
