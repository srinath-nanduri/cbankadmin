import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import {Clog} from '../clogt';

@Component({
  selector: 'app-clog',
  templateUrl: './clog.component.html',
  styleUrls: ['./clog.component.css']
})
export class ClogComponent implements OnInit {

  cust = ["Srinath", "Gunji", "Akank", "Sreeja", "Dha"]

  auth: { [key: string]: string } = {
    "Srinath" : "content",
    "Gunji" : "topgonly",
    "Akank" : "barfi",
    "Sreeja" : "nandi",
    "Dhairya" : "Meh"
  }

  lc:boolean;
  displog:string='false';



  submitted  =false;
  onSubmit(){ this.submitted = true;}


  constructor(private _router: Router, private cookSer: CookieService) { 
    this.lc=false;
    this.displog = this.cookSer.get('logcorr');
  }

  

  ngOnInit(): void {

    // this.cookSer.set('logcorr', 'false');

  }

  val(){
    this._router.navigateByUrl('/dash');
  }

  submit(form: NgForm){

    let u = form.value.user;

    // const d = this.auth["Srinath"];
    if(this.cust.includes(u)){
      if(form.value.pwd==this.auth[u]){
        // document.writeln("Nig");
        this._router.navigateByUrl('/dash'); // redirect user to dashboard using ts. 
        // this.logc.setLog(true);

        this.cookSer.set('logcorr','true');
        console.log(this.cookSer.get('logcorr'));
        this.displog = this.cookSer.get('logcorr');


      }
      else{
        // this.login_err = true;
        // this.log_corr = true;
        this.lc = true;

        // this.logc.setLog(false);
        this.cookSer.set('logcorr','false');
        this.displog = this.cookSer.get('logcorr');

      }      
    }
    else{
      this.lc = true;
      // this.logc.setLog(false);
      this.cookSer.set('logcorr','false');
      this.displog = this.cookSer.get('logcorr');
    }
  }

}
