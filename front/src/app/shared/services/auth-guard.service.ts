import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, CanLoad, Router, Route, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LoginService } from './login.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  private _initialUrl: string;


  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService
               .isAuthorised()
               .map(res => {
                  this.initialUrl = state.url;
console.log(`0000000000000000000000000000000000000000000000000000000`);

                  if (res['authorised']) {
console.log(`11111111111111111111111111111111111111111111111111111111111`);
                    return true;
                  } else {
console.log(`222222222222222222222222222222222222222222222`);
                    // this.router.navigate(['/login']);
                    this.router.navigate(['/', {outlets: {popup: 'login'} }]);

                    return false;
                  };
                }).catch((err) => {
console.log(`33333333333333333333333333333333333333333333333333`);
                  //this.router.navigate(['/login']);
                  this.router.navigate(['/', {outlets: {popup:'login'} }]);

                  return Observable.of(false);
                });
  }


  canLoad(route: Route): Observable<boolean> {
    return this.loginService
               .isAuthorised()
               .map(res => {
                  this.initialUrl = `/${route.path}`;

                  if (res['authorised']) {
                    return true;
                  } else {
                    //this.router.navigate(['/login']);
                    this.router.navigate([{ outlets: { 'popup' : ['login'] } }], { relativeTo: this.route });

                    return false;
                  };
                }).catch((err) => {
                  //this.router.navigate(['/login']);
                  this.router.navigate([{ outlets: { 'popup' : ['login'] } }], { relativeTo: this.route });

                  return Observable.of(false);
                });
  }


  set initialUrl(url: string) {
    this._initialUrl = url;
  }


  get initialUrl(): string {
    return this._initialUrl;
  }

}
