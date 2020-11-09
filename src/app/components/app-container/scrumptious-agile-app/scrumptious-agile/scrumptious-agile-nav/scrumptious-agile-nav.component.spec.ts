import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumptiousAgileNavComponent } from './scrumptious-agile-nav.component';

describe('ScrumptiousAgileNavComponent', () => {
  let component: ScrumptiousAgileNavComponent;
  let fixture: ComponentFixture<ScrumptiousAgileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumptiousAgileNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumptiousAgileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
