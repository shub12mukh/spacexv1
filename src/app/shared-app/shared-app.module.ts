import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { SideNavFilterHeaderComponent } from './side-nav-filter-header/side-nav-filter-header.component';
import { SideNavYearFilterComponent } from './side-nav-year-filter/side-nav-year-filter.component';
import { SideNavLaunchFilterComponent } from './side-nav-launch-filter/side-nav-launch-filter.component';
import { SideNavLandFilterComponent } from './side-nav-land-filter/side-nav-land-filter.component';


@NgModule({
  declarations: [
    InfoCardComponent,
    FooterAppComponent,
    HeaderAppComponent,
    SideNavFilterHeaderComponent,
    SideNavYearFilterComponent,
    SideNavLaunchFilterComponent,
    SideNavLandFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoCardComponent,
    FooterAppComponent,
    HeaderAppComponent,
    SideNavFilterHeaderComponent,
    SideNavYearFilterComponent,
    SideNavLaunchFilterComponent,
    SideNavLandFilterComponent
  ]
})
export class SharedAppModule { }
