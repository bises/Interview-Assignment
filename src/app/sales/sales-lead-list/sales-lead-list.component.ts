import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';
import { SalesService } from "../sales.service"
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { AddSalesLeadModalComponent } from './sales-lead-addmodal.component';
import { ToastrService } from 'ngx-toastr';

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
    hideSubHeader: true,
    attr: { class: "table table-striped" },
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
        title: 'Value',
        position: "right",
        valuePrepareFunction: (value) =>  {
          return this._currPipe.transform(value,"USD","symbol","1.0-0");
        }
      },
      date: {
        title: 'Date',
        valuePrepareFunction: (value) =>  {
          return this._datePipe.transform(value, "MM/dd/yyyy")
        }
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
    private _modalService: NgbModal,
    private _datePipe: DatePipe,
    private _currPipe: CurrencyPipe,
    private _toastr: ToastrService
    ) { 
   }

  ngOnInit() {
    this.isLoading = true;
    this._salesService.getSalesLeadList().subscribe((salesList) => {
      this.rawData = salesList.payload;
      this.source = new LocalDataSource(this.rawData);
      this.isLoading = false;
    }),
    (error: any) => console.error(error);
  }

  public addNewItem(event: any){
    this._modalService.open(AddSalesLeadModalComponent).result.then(
      (data: any) => this._salesService.addSalesLead(data).subscribe((response) => {
        this.rawData.push(data);
        let sort = this.source.getSort()
        this.source = new LocalDataSource(this.rawData);
        this.source.setSort(sort);
        this._toastr.info("Successfully added",null,{
          positionClass: 'toast-top-center',
          timeOut: 2000,
          progressBar: true
        }),
        (error: any) => console.error(error);
      }));
  }

  private onDelete(event: any){
    alert('Delete functionality not implemented');
  }

  private getNumberOfDisplayedElement(){ 
    let dataCount = this.rawData.length;   
    let perPage = this.source.getPaging().perPage;
    let numberOfPages = Math.ceil(dataCount/perPage);
    let pageNumber = this.source.getPaging().page;
    let startCount = perPage * (pageNumber - 1) + 1;
    let endCount = startCount + (pageNumber === numberOfPages ? (dataCount % perPage) === 0 ? perPage : (dataCount % perPage) : perPage) - 1;
    return `Showing ${startCount}-${endCount} of ${dataCount}`;
  }

}
