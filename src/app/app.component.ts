import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApicallsService } from './apicalls.service';
import { RequestModel } from './request-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceXv1';
  yearStartRange = 2006;
  arrayYearForFilter: number[];
  filterTitleHeader = 'filters';
  filterOnYearHeader = 'launch year';
  filterOnSucessfullLaunch = 'successful launch';
  filterOnSucessfullLand = 'successful land';
  yearName;
  launchBtntrueF :boolean = false;
  launchBtnfalseF :boolean = false;
  landBtntrueF :boolean = false;
  landBtnfalseF :boolean = false;
  responseDatas: any[];
  activeYearFilter: string[] = [];
  requestParam = new RequestModel();
  developedBy: string = "developed by shubham mukherjee";
  constructor(private api: ApicallsService,private elem: ElementRef) {

  };
  ngOnInit() {
    //get all years
    this.arrayYearForFilter = this.getAllYearFromYear(this.yearStartRange);
    //default no filter criteria applied on API call 
    this.api.getAllData().subscribe(data => {
      this.responseDatas = data;
    });
  }
  onFilterYearSearch($event, year: String) {
    let eleTargetSrc = $event.target || $event.srcElement;
    let element = this.elem.nativeElement.querySelectorAll('.year-btn-custom');
    let elementF = this.elem.nativeElement.querySelectorAll('.year-btn-custom-focus');
    element.forEach( ele => {
      ele.classList = "btn year-btn-custom";
    });
    elementF.forEach( ele => {
      ele.classList = "btn year-btn-custom";
    })
    eleTargetSrc.className = "btn year-btn-custom-focus";
    this.requestParam.launch_year = year;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  onKeyupEvent($event){
    if($event.key === "Tab"){
      const year = $event.path[0]?.childNodes[0]?.data;
      this.onFilterYearSearch($event, year);
    }
  }
  onFilterLaunchSearch(e, flag: String) {
    if(flag==='true'){
      this.launchBtntrueF= true;
      this.launchBtnfalseF = false;
    } 
    else {
      this.launchBtntrueF= false;
      this.launchBtnfalseF = true;
    }
    this.requestParam.launch_success = flag;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  onFilterLandSearch(e, flag: String) {
    if(flag==='true'){
      this.landBtntrueF= true;
      this.landBtnfalseF = false;
    } 
    else {
      this.landBtntrueF= false;
      this.landBtnfalseF = true;
    }
    this.requestParam.land_success = flag;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  getAllYearFromYear(fromYear: number): number[] {
    let arrYear: number[] = [];
    for (let i = fromYear; i <= new Date().getFullYear(); i++) {
      arrYear.push(i);
    }
    return arrYear;
  }
  getActiveYearFilter(year: string): boolean{
    if(year === "2006")
      return true;
    else return false;
  }
}
