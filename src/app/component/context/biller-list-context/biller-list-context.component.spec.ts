import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerListContextComponent } from './biller-list-context.component';

describe('BillerListContextComponent', () => {
  let component: BillerListContextComponent;
  let fixture: ComponentFixture<BillerListContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerListContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerListContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
