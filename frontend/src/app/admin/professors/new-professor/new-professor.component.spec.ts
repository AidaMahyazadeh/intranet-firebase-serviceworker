import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessorComponent } from './new-professor.component';

describe('NewProfessorComponent', () => {
  let component: NewProfessorComponent;
  let fixture: ComponentFixture<NewProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfessorComponent]
    });
    fixture = TestBed.createComponent(NewProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
