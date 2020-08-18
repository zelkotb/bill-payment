import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerPageComponent } from './biller-page.component';

describe('BillerPageComponent', () => {
  let component: BillerPageComponent;
  let fixture: ComponentFixture<BillerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
