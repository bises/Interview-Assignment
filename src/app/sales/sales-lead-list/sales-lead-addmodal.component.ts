import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SalesLead } from "../../shared/models";

@Component({
    templateUrl: "./sales-lead-addModal.component.html"
})
export class AddSalesLeadModalComponent implements OnInit {
    private title: string;
    private createForm: FormGroup;
    private leads: string = "";
    private rep: string = "";
    private date: number; 
    private value: number;
    private clients: string;
    private salesLead: any;
    private isLoading = false;

    constructor( 
        private _formBuilder: FormBuilder,
        private _modal: NgbActiveModal
    ) { }

    public ngOnInit() {
        this.title = "Add Sales Lead";
        this.createForm = this._formBuilder.group({
            'lead': [null, Validators.required],
            'rep':[null,Validators.required],
            'client':[null,Validators.required],
            'value':[null,Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
            'date':[null,Validators.required]
        })
    }

    addSalesLead(salesLead){
        let data = salesLead.value;
        data.value = +data.value;
        data.date = new Date(data.date).getTime();
        this._modal.close(data);
    }
}