import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavYearFilterComponent } from './side-nav-year-filter.component';

describe('SideNavYearFilterComponent', () => {
  let component: SideNavYearFilterComponent;
  let fixture: ComponentFixture<SideNavYearFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavYearFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavYearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
