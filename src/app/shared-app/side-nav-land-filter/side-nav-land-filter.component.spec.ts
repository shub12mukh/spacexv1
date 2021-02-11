import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLandFilterComponent } from './side-nav-land-filter.component';

describe('SideNavLandFilterComponent', () => {
  let component: SideNavLandFilterComponent;
  let fixture: ComponentFixture<SideNavLandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavLandFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavLandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
