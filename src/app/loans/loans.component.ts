import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoanformComponent } from '../loanform/loanform.component';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})

export class LoansComponent implements OnInit {
  constructor() { 
    
  }

  ngOnInit(): void {}  

} 
