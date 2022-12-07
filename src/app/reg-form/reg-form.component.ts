import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  mobileNo =''
  email=''
  PANcard = ''
  Aadhar=''
  constructor() { }

  ngOnInit(): void {
  }

  validate(){
    document.write(this.mobileNo + "" + this.email + "" + this.PANcard + "" + this.Aadhar)
  }

}
