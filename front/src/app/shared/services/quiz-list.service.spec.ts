import { TestBed, inject } from '@angular/core/testing';

import { QuizListService } from './quiz-list.service';

describe('QuizListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizListService]
    });
  });

  it('should ...', inject([QuizListService], (service: QuizListService) => {
    expect(service).toBeTruthy();
  }));
});
