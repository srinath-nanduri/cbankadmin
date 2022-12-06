import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private cookSer: CookieService) { }

  ngOnInit(): void {
    this.cookSer.set('logcorr', 'false');

  }

}
