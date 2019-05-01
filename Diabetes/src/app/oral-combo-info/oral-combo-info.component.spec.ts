import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralComboInfoComponent } from './oral-combo-info.component';

describe('OralComboInfoComponent', () => {
  let component: OralComboInfoComponent;
  let fixture: ComponentFixture<OralComboInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralComboInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralComboInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
