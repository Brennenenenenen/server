import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjComboClassComponent } from './inj-combo-class.component';

describe('InjComboClassComponent', () => {
  let component: InjComboClassComponent;
  let fixture: ComponentFixture<InjComboClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjComboClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjComboClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
