import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhalablesComponent } from './inhalables.component';

describe('InhalablesComponent', () => {
  let component: InhalablesComponent;
  let fixture: ComponentFixture<InhalablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhalablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhalablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
