import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesComponent } from './classes.component';

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a page that has class information', () => {
    const fixture = TestBed.createComponent(ClassesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
