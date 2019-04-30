import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralClass1Component } from './oral-class1.component';

describe('OralClass1Component', () => {
  let component: OralClass1Component;
  let fixture: ComponentFixture<OralClass1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralClass1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralClass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
