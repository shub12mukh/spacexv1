import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-filter-header',
  templateUrl: './side-nav-filter-header.component.html',
  styleUrls: ['./side-nav-filter-header.component.css']
})
export class SideNavFilterHeaderComponent implements OnInit {
  @Input() filterTitleHeader;
  constructor() { }

  ngOnInit(): void {
  }

}
