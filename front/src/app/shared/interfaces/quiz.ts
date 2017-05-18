export interface IAnswerOption {
  id: number;
  text: string;
}

export interface IQuestion {
  question: string;
  answerOptions?: IAnswerOption[];
  correctOptions?: number[];
  correctOption?: number;
  correctAnswers?: string[];
  answerIsCorrect?: boolean;
}

export interface IQuiz {
  _id: string;
  name: string;
  description: string;
  date?: Date;
  questions: IQuestion[];
}
