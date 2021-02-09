import { Component, OnInit } from '@angular/core';
import { ApicallsService } from './apicalls.service';
import { RequestModel } from './request-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spaceXv1';
  filterTitleHeader = 'filters';
  filterOnYearHeader = 'launch year';
  filterOnSucessfullLaunch = 'successful launch';
  filterOnSucessfullLand = 'successful land';
  yearName;
  responseDatas:any[];
  requestParam = new RequestModel();
  // hard coded value, wil change later
  arrayYearForFilter = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
  developedBy: string = "developed by shubham mukherjee";
  constructor(private api: ApicallsService){
    
  };
  ngOnInit(){
    this.api.getAllData().subscribe(data => {
      this.responseDatas = data;
      console.log(this.responseDatas);
    });
  }
  onFilterYearSearch(year: String){
    console.log(year);
    this.requestParam.launch_year = year;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  onFilterLaunchSearch(flag: String){
    this.requestParam.launch_success = flag;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  onFilterLandSearch(flag: String){
    this.requestParam.land_success= flag;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
}
