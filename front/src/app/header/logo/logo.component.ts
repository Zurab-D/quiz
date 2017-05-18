import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: ['.logo img { width: 100%; }']
})
export class LogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
