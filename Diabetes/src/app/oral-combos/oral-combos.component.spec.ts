import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralCombosComponent } from './oral-combos.component';

describe('OralCombosComponent', () => {
  let component: OralCombosComponent;
  let fixture: ComponentFixture<OralCombosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralCombosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
