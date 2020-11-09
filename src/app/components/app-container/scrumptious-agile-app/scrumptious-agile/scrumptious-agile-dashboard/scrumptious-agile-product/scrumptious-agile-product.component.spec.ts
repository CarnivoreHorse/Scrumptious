import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumptiousAgileProductComponent } from './scrumptious-agile-product.component';

describe('ScrumptiousAgileProductComponent', () => {
  let component: ScrumptiousAgileProductComponent;
  let fixture: ComponentFixture<ScrumptiousAgileProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumptiousAgileProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumptiousAgileProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
