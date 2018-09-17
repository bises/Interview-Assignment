import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
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

    public addSalesLead(salesLeadObj: any): Observable<any>{
        let jsonData = JSON.stringify(salesLeadObj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.salesApiRoute, jsonData, options)
        .map((response: Response) => response.json);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}