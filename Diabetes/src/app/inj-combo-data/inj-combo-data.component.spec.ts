import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjComboDataComponent } from './inj-combo-data.component';

describe('InjComboDataComponent', () => {
  let component: InjComboDataComponent;
  let fixture: ComponentFixture<InjComboDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjComboDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjComboDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
