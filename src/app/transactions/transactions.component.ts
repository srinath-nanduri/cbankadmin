import { Component, OnInit } from '@angular/core';
import { Transactions, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions:Transactions[] = [];

  constructor(private httpClientService:HttpClientService) { }


ngOnInit() {
    this.httpClientService.getTransactions().subscribe(
     response =>{this.transactions=response;},
    );
    // console.log(this.transactions);
  } 

}
