import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClogComponent } from './clog/clog.component';
import { PnfComponent } from './pnf/pnf.component';
import { CookieService } from 'ngx-cookie-service';

import {routes} from './app-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { IssuesComponent } from './issues/issues.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClogComponent,
    PnfComponent,
    TransactionsComponent,
    IssuesComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
