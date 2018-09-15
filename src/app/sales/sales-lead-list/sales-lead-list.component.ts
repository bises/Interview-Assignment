import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SalesService } from "../sales.service"
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { AddSalesLeadModalComponent } from './sales-lead-addmodal.component';

@Component({
  selector: 'app-sales-lead-list',
  templateUrl: './sales-lead-list.component.html',
  styleUrls: ['./sales-lead-list.component.css']
})
export class SalesLeadListComponent implements OnInit {

  public isLoading = false;
  public rawData: any[];
  public modal: NgbModalRef;
  public settings = {    
    hideHeader: false,
    hideSubHeader: true,
    attr: { class: "table" },
    actions: {
      columnTitle: '',
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
      perPage: 5,
      display: true
   }
  };
  public source: LocalDataSource;
  constructor(
    private _salesService: SalesService,
    private _modalService: NgbModal
    ) { 
   }

  ngOnInit() {
    this.isLoading = true;
    this._salesService.getSalesLeadList().subscribe((salesList) => {
      this.rawData = salesList.payload;
      this.source = new LocalDataSource(salesList.payload);
      this.isLoading = false;
    });
  }

  public addNewItem(event: any){
    // this.source.remove()
    this._modalService.open(AddSalesLeadModalComponent);
    this.rawData.pop();
    this.source = new LocalDataSource(this.rawData);
  }

}
