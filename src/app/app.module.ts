import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SalesLeadListComponent } from './sales/sales-lead-list/sales-lead-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SalesService } from "./sales/sales.service"

@NgModule({  
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SalesLeadListComponent
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
