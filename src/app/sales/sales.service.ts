import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map";

@Injectable()
export class SalesService {
    private salesApiRoute = "https://interview-leads-api-mgtjgewpum.now.sh/api/leads";
    
    constructor (private _http: Http){ }

    public getSalesLeadList(): any{
        return this._http.get(this.salesApiRoute)
             .map((response: Response) => response.json());
    }
}