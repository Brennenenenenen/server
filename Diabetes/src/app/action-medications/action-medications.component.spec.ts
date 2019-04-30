import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMedicationsComponent } from './action-medications.component';

describe('ActionMedicationsComponent', () => {
  let component: ActionMedicationsComponent;
  let fixture: ComponentFixture<ActionMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
