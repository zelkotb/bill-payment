import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldContextComponent } from './field-context.component';

describe('FieldContextComponent', () => {
  let component: FieldContextComponent;
  let fixture: ComponentFixture<FieldContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
