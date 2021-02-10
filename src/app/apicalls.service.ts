import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from './request-model';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  private api = 'https://api.spacexdata.com/v3/launches?limit=100';
  // hard coded value, wil change later
  private arrayYearForFilter = [2006,2008,2010,2012,2014,2016,2018,2020,2007,2009,2011,2013,2015,2017,2019,2021];
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
    return this.httpClient.get(this.api, {params : params});
  }
  public getYear(): number[]{
    return this.arrayYearForFilter
  }
}
