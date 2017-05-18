import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizResolve } from './quiz-view/quiz.resolve';

import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizEditComponent } from './quiz-view/quiz-view.component';
// import { AppComponent } from './app.component';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, outlet: 'popup', },

  { path: 'signup', component: SignupComponent, outlet: 'popup', },

  { path: '', component: QuizListComponent,
    canActivate : [AuthGuardService],
  },

  { path: 'quizzes', component: QuizListComponent,
    canActivate : [AuthGuardService],
    children: [
      { path: ':id', component: QuizEditComponent,
        resolve: { quiz: QuizResolve },
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
