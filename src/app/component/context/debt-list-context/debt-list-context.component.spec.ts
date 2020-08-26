import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtListContextComponent } from './debt-list-context.component';

describe('DebtListContextComponent', () => {
  let component: DebtListContextComponent;
  let fixture: ComponentFixture<DebtListContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtListContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtListContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
