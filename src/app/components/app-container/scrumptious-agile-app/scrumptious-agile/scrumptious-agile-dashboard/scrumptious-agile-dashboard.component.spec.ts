import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumptiousAgileDashboardComponent } from './scrumptious-agile-dashboard.component';

describe('ScrumptiousAgileDashboardComponent', () => {
  let component: ScrumptiousAgileDashboardComponent;
  let fixture: ComponentFixture<ScrumptiousAgileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumptiousAgileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumptiousAgileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
