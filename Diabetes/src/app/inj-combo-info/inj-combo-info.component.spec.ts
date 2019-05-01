import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjComboInfoComponent } from './inj-combo-info.component';

describe('InjComboInfoComponent', () => {
  let component: InjComboInfoComponent;
  let fixture: ComponentFixture<InjComboInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjComboInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjComboInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
