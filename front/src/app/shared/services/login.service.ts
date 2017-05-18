import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/observable/of';

import { ResponseService } from './response.service';
import { CONFIG } from '../../config';


@Injectable()
export class LoginService {
  private urlLogin     = CONFIG.urls.login     ; // '/login';
  private urlSignup     = CONFIG.urls.signup    ; // '/signup';
  private urlLogout     = CONFIG.urls.logout    ; // '/logout';
  private urlAuthorised = CONFIG.urls.authorised; // '/authorised';

  public user = {};


  constructor(private router: Router,
              private http: Http,
              private responseService: ResponseService) {
  }


  // -- Sign up --------------------------------------------------
  signup(formValue): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = {
      displayName: formValue.name,
      username   : formValue.nick,
      email      : formValue.email,
      password   : formValue.pass
    };

    return this.http
               .post(this.urlSignup, body, <RequestOptionsArgs> {headers: headers, withCredentials: true})
               .map(this.responseService.extractData)
               .catch(this.responseService.handleError);
  }


  // -- Sign in --------------------------------------------------
  login(formValue): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = { username: formValue.nick, password: formValue.pass };
    return this.http
               .post(this.urlLogin, body, <RequestOptionsArgs> {headers: headers, withCredentials: true})
               .map(this.responseService.extractData)
               .map(res => this.user = res)
               .catch(this.responseService.handleError);
  }


  // -- Logout --------------------------------------------------
  logout() {
    return this.http
               .get(this.urlLogout)
               .map(this.responseService.extractData)
               .catch(this.responseService.handleError);
  }


  // -- Is Authorized? --------------------------------------------------
  isAuthorised() {
    return this.http
               .get(this.urlAuthorised)
               .map(this.responseService.extractData)
               .map(res => this.user = res)
               .catch(this.responseService.handleError);
  }

}
