import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClogComponent } from './clog/clog.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { IssuesComponent } from './issues/issues.component';
import { PnfComponent } from './pnf/pnf.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
  // {path: 'cust-ser', component:CustSerComponent},
  {path: 'clog', component:ClogComponent},
  {path:'transactions', component:TransactionsComponent},
  {path:'issues', component:IssuesComponent},
  {path:'feedback', component:FeedbackComponent},

  // {path: '', redirectTo:'/clog', pathMatch:'full'},
  {path: '', redirectTo:'/transactions', pathMatch:'full'},

  {path: '**', component:PnfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
