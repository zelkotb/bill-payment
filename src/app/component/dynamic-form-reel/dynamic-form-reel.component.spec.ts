import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormReelComponent } from './dynamic-form-reel.component';

describe('DynamicFormReelComponent', () => {
  let component: DynamicFormReelComponent;
  let fixture: ComponentFixture<DynamicFormReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
