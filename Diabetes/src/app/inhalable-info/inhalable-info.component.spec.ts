import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhalableInfoComponent } from './inhalable-info.component';

describe('InhalableInfoComponent', () => {
  let component: InhalableInfoComponent;
  let fixture: ComponentFixture<InhalableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhalableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhalableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
