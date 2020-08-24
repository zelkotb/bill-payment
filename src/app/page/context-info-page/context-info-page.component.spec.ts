import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextInfoPageComponent } from './context-info-page.component';

describe('ContextInfoPageComponent', () => {
  let component: ContextInfoPageComponent;
  let fixture: ComponentFixture<ContextInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
