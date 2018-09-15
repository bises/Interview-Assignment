import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SalesLeadListComponent } from './sales/sales-lead-list/sales-lead-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SalesService } from "./sales/sales.service"
import { AddSalesLeadModalComponent } from "./sales/sales-lead-list/sales-lead-addmodal.component"

@NgModule({  
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    NgbModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SalesLeadListComponent,
    AddSalesLeadModalComponent
  ],
  providers: [SalesService],
  bootstrap: [AppComponent],
  entryComponents: [AddSalesLeadModalComponent]
})
export class AppModule { }
