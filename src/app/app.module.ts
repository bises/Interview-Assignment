import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe, CurrencyPipe } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SalesLeadListComponent } from './sales/sales-lead-list/sales-lead-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SalesService } from "./sales/sales.service"
import { AddSalesLeadModalComponent } from "./sales/sales-lead-list/sales-lead-addmodal.component";
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({  
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()  
  ],
  declarations: [
    AppComponent,
    SalesLeadListComponent,
    AddSalesLeadModalComponent
  ],
  providers: [SalesService, DatePipe, CurrencyPipe],
  bootstrap: [AppComponent],
  entryComponents: [AddSalesLeadModalComponent]
})
export class AppModule { }
