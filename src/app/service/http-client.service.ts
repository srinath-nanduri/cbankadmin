import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Transactions{
  constructor(
    public id:number,
    public cid:number,
    public tdate:String,
    public ttime:String,
    public twithdraw:number,
    public tdeposit:number,
    public tbalance: number
  ) {}
}


export class Issues{
  constructor(
    public id:number,
    public iname:string,
    public iaccno:string,
    public iemail:string,
    public imobile:string,
    public idate:string,
    public itype: string,
    public idesc: string
  ) {}
}

export class Feedback{

  constructor(
    public fid:number,
    public ftype:string,
    public fname:string,
    public femail:string,
    public fmobile:string,
    public fstaff:string,
    public fbranch:string,
    public fdesc:string,
  ){}

}



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }

  getTransactions()
  {
    // console.log("test call");
    return this.httpClient.get<Transactions[]>('http://localhost:5151/Transactions');
  }

  getIssues()
  {
    return this.httpClient.get<Issues[]>('http://localhost:5151/Issues');
  }

  getFeedback()
  {
    return this.httpClient.get<Feedback[]>('http://localhost:5151/Feedback');
  }

  // valUser(email:String, pass:String){
  //   return this.httpClient.get<String[]>('http://localhost:4141/val/'+email+'/'+pass);
  // }

}
