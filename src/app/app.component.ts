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
  arrayYearForFilter: number[];
  filterTitleHeader = 'filters';
  filterOnYearHeader = 'launch year';
  filterOnSucessfullLaunch = 'successful launch';
  filterOnSucessfullLand = 'successful land';
  yearName;
  responseDatas:any[];
  requestParam = new RequestModel();
  developedBy: string = "developed by shubham mukherjee";
  constructor(private api: ApicallsService){
    
  };
  ngOnInit(){
    //get all years
    this.arrayYearForFilter = this.api.getYear();
    //default no filter criteria applied on API call 
    this.api.getAllData().subscribe(data => {
      this.responseDatas = data;
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
