import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFilterHeaderComponent } from './side-nav-filter-header.component';

describe('SideNavFilterHeaderComponent', () => {
  let component: SideNavFilterHeaderComponent;
  let fixture: ComponentFixture<SideNavFilterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavFilterHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFilterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
