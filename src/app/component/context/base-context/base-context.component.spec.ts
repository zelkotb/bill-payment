import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseContextComponent } from './base-context.component';

describe('BaseContextComponent', () => {
  let component: BaseContextComponent;
  let fixture: ComponentFixture<BaseContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
