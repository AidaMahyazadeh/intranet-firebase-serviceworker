import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCoursesComponent } from './modify-courses.component';

describe('ModifyCoursesComponent', () => {
  let component: ModifyCoursesComponent;
  let fixture: ComponentFixture<ModifyCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyCoursesComponent]
    });
    fixture = TestBed.createComponent(ModifyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
