import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionsItemComponent } from './quiz-questions-item.component';

describe('QuizQuestionsItemComponent', () => {
  let component: QuizQuestionsItemComponent;
  let fixture: ComponentFixture<QuizQuestionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
