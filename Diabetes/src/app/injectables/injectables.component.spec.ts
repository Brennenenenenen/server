import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectablesComponent } from './injectables.component';

describe('InjectablesComponent', () => {
  let component: InjectablesComponent;
  let fixture: ComponentFixture<InjectablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
