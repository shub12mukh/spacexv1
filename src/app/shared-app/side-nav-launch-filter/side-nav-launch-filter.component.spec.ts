import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLaunchFilterComponent } from './side-nav-launch-filter.component';

describe('SideNavLaunchFilterComponent', () => {
  let component: SideNavLaunchFilterComponent;
  let fixture: ComponentFixture<SideNavLaunchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavLaunchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavLaunchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
