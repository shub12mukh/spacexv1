import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.css']
})
export class FooterAppComponent implements OnInit {
  developedBy: string = "developed by shubham mukherjee";
  constructor() { }

  ngOnInit(): void {
  }

}
