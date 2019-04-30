import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralComboDataComponent } from './oral-combo-data.component';

describe('OralComboDataComponent', () => {
  let component: OralComboDataComponent;
  let fixture: ComponentFixture<OralComboDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralComboDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralComboDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
