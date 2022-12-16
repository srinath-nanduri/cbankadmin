import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientService } from '../service/http-client.service';
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
  vals:String[]=[];



  submitted  =false;
  onSubmit(){ this.submitted = true;}


  constructor(private _router: Router, private cookSer: CookieService, private httpClientService:HttpClientService) { 
    this.lc=false;

  }

  

  ngOnInit(): void {

    this.displog = this.cookSer.get('logcorr');

  }

  val(){
    this._router.navigateByUrl('/dash');
  }

  submit(form: NgForm){

    let u = form.value.user;

    if(this.cust.includes(u)){
      if(form.value.pwd==this.auth[u]){
        this._router.navigateByUrl('/dash'); // redirect user to dashboard using ts. 

        this.cookSer.set('logcorr','true');
        console.log(this.cookSer.get('logcorr'));
        this.displog = this.cookSer.get('logcorr');


      }
      else{
        this.lc = true;

        this.cookSer.set('logcorr','false');
        this.displog = this.cookSer.get('logcorr');

      }      
    }
    else{
      this.lc = true;
      this.cookSer.set('logcorr','false');
      this.displog = this.cookSer.get('logcorr');
    }
  }

  // submit(form: NgForm){

  //   let email = form.value.user;
  //   let pass = form.value.pwd;

  //   this.httpClientService.valUser(email, pass).subscribe(
  //     response =>{this.vals=response;},
  //    );

  //    console.log(this.vals);

  // }


  
  

}
