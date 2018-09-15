import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-sales-lead-list',
  templateUrl: './sales-lead-list.component.html',
  styleUrls: ['./sales-lead-list.component.css']
})
export class SalesLeadListComponent implements OnInit {

  public settings = {    
    hideHeader: false,
    attr: { class: "table-responsive" },
    actions: {
      edit: false, 
      delete: false,
      position: "right"
    },
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      name: {
        title: 'Name',
        filter: false
      },
      age: {
        title: 'Age',
        filter: false
      }
    },
    pager: { perPage: 2 }
  };
  public characters: any;
  constructor() {
    this.characters = [
      {
          "id": "1",
          "name": "Peter Dinklage",
          "age": "45"
      },
      {
          "id": "2",
          "name": "Lina Heady",
          "age": "43"
      },
      {
          "id": "3",
          "name": "Emilia Clarke",
          "age": "30"
      },
      {
          "id": "4",
          "name": "Kit Harrington",
          "age": "30"
      },
      {
          "id": "5",
          "name": "Sean Bean",
          "age": "50"
      }];
   }

  ngOnInit() {
    
  }

}
