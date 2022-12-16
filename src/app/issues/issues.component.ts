import { Component, OnInit } from '@angular/core';
import { HttpClientService, Issues } from '../service/http-client.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues:Issues[] = [];

  constructor(private httpClientService:HttpClientService) { }


ngOnInit() {
   
  this.httpClientService.getIssues().subscribe(
    response =>{this.issues=response;},
   );

}
}
