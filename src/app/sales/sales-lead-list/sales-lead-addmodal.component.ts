import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    templateUrl: "./sales-lead-addModal.component.html"
})
export class AddSalesLeadModalComponent implements OnInit {
    private message: string;

    constructor(
        private modal: NgbActiveModal
    ) { }

    public ngOnInit() {
        this.message = "package_ChangeStatusSuggestion";
    }
}