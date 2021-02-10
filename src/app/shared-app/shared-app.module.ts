import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { HeaderAppComponent } from './header-app/header-app.component';


@NgModule({
  declarations: [
    InfoCardComponent,
    FooterAppComponent,
    HeaderAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoCardComponent,
    FooterAppComponent,
    HeaderAppComponent
  ]
})
export class SharedAppModule { }
