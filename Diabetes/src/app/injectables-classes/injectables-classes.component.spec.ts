import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectablesClassesComponent } from './injectables-classes.component';

describe('InjectablesClassesComponent', () => {
  let component: InjectablesClassesComponent;
  let fixture: ComponentFixture<InjectablesClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectablesClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectablesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
