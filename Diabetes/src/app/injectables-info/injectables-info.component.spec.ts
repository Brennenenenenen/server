import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectablesInfoComponent } from './injectables-info.component';

describe('InjectablesInfoComponent', () => {
  let component: InjectablesInfoComponent;
  let fixture: ComponentFixture<InjectablesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectablesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectablesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
