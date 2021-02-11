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
  responseDatas: any[];
  requestParam = new RequestModel();
  developedBy: string = "developed by shubham mukherjee";
  constructor(private api: ApicallsService) {

  };
  ngOnInit() {
    //get all years
    this.arrayYearForFilter = this.getAllYearFromYear(this.yearStartRange);
    //default no filter criteria applied on API call 
    this.api.getAllData().subscribe(data => {
      this.responseDatas = data;
    });
  }
  onFilterYearSearch(year: String) {
    this.requestParam.launch_year = year;
    this.api.getFilterData(this.requestParam).subscribe(data => {
      this.responseDatas = data;
    });
  }
  onKeyupEvent($event){
    if($event.key === "Tab"){
      const year = $event.path[0]?.childNodes[0]?.data;
      this.onFilterYearSearch(year);
    }
  }
  onFilterLaunchSearch(e, flag: String) {
    const classList = e.target.classList;
    const classes = e.target.className;
    console.log(classList, classes);
    classList.add('active');
    console.log(classList, classes);
    // this.requestParam.launch_success = flag;
    // this.api.getFilterData(this.requestParam).subscribe(data => {
    //   this.responseDatas = data;
    // });
  }
  onFilterLandSearch(e, flag: String) {
    const classList = e.target.classList;
    const classes = e.target.className;
    console.log(classList, classes);
    classList.add('active');
    console.log(classList, classes);
    // this.requestParam.land_success = flag;
    // this.api.getFilterData(this.requestParam).subscribe(data => {
    //   this.responseDatas = data;
    // });
  }
  getAllYearFromYear(fromYear: number): number[] {
    let arrYear: number[] = [];
    for (let i = fromYear; i <= new Date().getFullYear(); i++) {
      arrYear.push(i);
    }
    return arrYear;
  }
  onLandButtonGroupClick($event) {
    // let clickedElement = $event.target || $event.srcElement;
    // console.log(clickedElement);
    // console.log(clickedElement.parentElement);
    // if (clickedElement.nodeName === "BUTTON") {
    //   console.log(clickedElement.nodeName);
    //   let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".land-profile");
    //   console.log(isCertainButtonAlreadyActive);
    //   // if a Button already has Class: .active
    //   if (isCertainButtonAlreadyActive) {
    //     isCertainButtonAlreadyActive.classList.remove("active");
    //   }

    //   clickedElement.className += " active";
    // }
  }
  onLaunchButtonGroupClick($event) {
    // let clickedElement = $event.target || $event.srcElement;

    // if (clickedElement.nodeName === "BUTTON") {

    //   let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".launch-profile");
    //   // if a Button already has Class: .active
    //   if (isCertainButtonAlreadyActive) {
    //     isCertainButtonAlreadyActive.classList.remove("active");
    //   }

    //   clickedElement.className += " active";
    // }
  }
}
