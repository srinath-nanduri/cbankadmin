import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  log_corr:boolean; 

  constructor( ) {
    this.log_corr = false;
   }

   setLog(val: boolean){
     this.log_corr = val;
    }

    getLog(){
      return this.log_corr;
    }



}
