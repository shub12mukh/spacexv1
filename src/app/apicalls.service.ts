import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from './request-model';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  private api = 'https://api.spacexdata.com/v3/launches?limit=100'
  constructor(private httpClient: HttpClient) { }
  public getAllData():Observable<any>{
    return this.httpClient.get(this.api);
  }
  public getFilterData(requestParam: RequestModel): Observable<any>{
    let params = new HttpParams();
    for(let property in requestParam) {
      if(requestParam.hasOwnProperty(property)) {
        params = params.append(property, requestParam[property]);
      };
    }
    console.log(params);
    return this.httpClient.get(this.api, {params : params});
  }
}
