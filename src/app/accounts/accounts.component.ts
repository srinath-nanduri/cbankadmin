import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  acc = [{aid:'01', ano:'6024922002', atype:'Salary', abal:'22,042', abranch:'Kormangala', ahold:'Srinath'},
         {aid:'02', ano:'6492020022', atype:'Savings', abal:'12,04,533', abranch:'ECIL', ahold:'Srinath, Gunjan'},
         {aid:'03', ano:'6492120021', atype:'Savings', abal:'53,854', abranch:'Chembur', ahold:'Srinath'}]

  constructor() { }

  ngOnInit(): void {
  }

  yopush(){
    this.acc.push({aid:'04', ano:'6492122006', atype:'Savings', abal:'49,283', abranch:'Earth', ahold:'Srinidhi'})
  }
  

}
