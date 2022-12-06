import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {
  message1!: string;

  constructor() { }

  submit() {
    alert ("Form Submitted Successfully!!");
  }

  ngOnInit(): void {
  }

}
