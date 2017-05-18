import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  receivedUserObj = {};

  constructor(/* private loginService: LoginService, */ private router: Router) { }

  clickLogout() {
    /* this.loginService
        .logout()
        .subscribe(res => this.router.navigate(['/login'])); */
  }

  ngOnInit() {
    // this.receivedUserObj = this.loginService.user;
  }

}
