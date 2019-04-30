import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralComboClassComponent } from './oral-combo-class.component';

describe('OralComboClassComponent', () => {
  let component: OralComboClassComponent;
  let fixture: ComponentFixture<OralComboClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralComboClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralComboClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
