import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SearchService } from './shared/services/search.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { HeaderModule } from './header/header.module';

import { QuizListService } from './shared/services/quiz-list.service';
import { ResponseService } from './shared/services/response.service';
import { QuizListItemComponent } from './quiz-item/quiz-item.component';
import { QuizEditComponent } from './quiz-view/quiz-view.component';
import { QuizQuestionsComponent } from './quiz-view/quiz-questions/quiz-questions.component';
import { QuizQuestionsItemComponent } from './quiz-view/quiz-questions-item/quiz-questions-item.component';

import { QuizResolve } from './quiz-view/quiz.resolve';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginService } from './shared/services/login.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EqualValidator } from './signup/equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    QuizListComponent,
    QuizListItemComponent,
    QuizEditComponent,
    QuizQuestionsComponent,
    QuizQuestionsItemComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ResponseService,
    QuizListService,
    SearchService,
    QuizResolve, LoginService, AuthGuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
