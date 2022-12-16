import { Component, OnInit } from '@angular/core';
import { Feedback, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback:Feedback[] = [];

  constructor(private httpClientService:HttpClientService) { }


ngOnInit() {
   
  this.httpClientService.getFeedback().subscribe(
    response =>{this.feedback=response;},
   );

}
}
