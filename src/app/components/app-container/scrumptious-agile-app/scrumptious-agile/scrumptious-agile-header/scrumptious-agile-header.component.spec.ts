import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumptiousAgileHeaderComponent } from './scrumptious-agile-header.component';

describe('ScrumptiousAgileHeaderComponent', () => {
  let component: ScrumptiousAgileHeaderComponent;
  let fixture: ComponentFixture<ScrumptiousAgileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumptiousAgileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumptiousAgileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
