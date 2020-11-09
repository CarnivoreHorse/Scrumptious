import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumptiousAgileComponent } from './scrumptious-agile.component';

describe('ScrumptiousAgileComponent', () => {
  let component: ScrumptiousAgileComponent;
  let fixture: ComponentFixture<ScrumptiousAgileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumptiousAgileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumptiousAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
