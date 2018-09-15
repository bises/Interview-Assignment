import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { SalesService } from "../sales.service"

@Component({
  selector: 'app-sales-lead-list',
  templateUrl: './sales-lead-list.component.html',
  styleUrls: ['./sales-lead-list.component.css']
})
export class SalesLeadListComponent implements OnInit {

  public isLoading = false;
  public settings = {    
    hideHeader: false,
    hideSubHeader: true,
    attr: { class: "table" },
    actions: {
      edit: false,
      add: false,
      delete : false,
      custom: [{ name: "delete", title: "<i class='fa fa-close'></i>"}],
      position: 'right'    
    },
    columns: {
      lead: {
        title: 'Leads',
        filter: false,
      },
      rep: {
        title: 'Rep',
        filter: false
      },
      client: {
        title: 'Clients',
        filter: false
      },
      value: {
        title: 'Value'
      },
      date: {
        title: 'Date'
      }
    },
    pager: { 
      perPage: 3,
      display: true
   }
  };
  public source: any;
  constructor(private _salesService: SalesService) {
    
   }

  ngOnInit() {
    this.isLoading = true;
    this._salesService.getSalesLeadList().subscribe((salesList) => {
      this.source = new LocalDataSource(salesList.payload);
      this.isLoading = false;
    });
  }

}
