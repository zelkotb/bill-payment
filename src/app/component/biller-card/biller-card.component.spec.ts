import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerCardComponent } from './biller-card.component';

describe('BillerCardComponent', () => {
  let component: BillerCardComponent;
  let fixture: ComponentFixture<BillerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
