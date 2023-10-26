import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDetailProfessorComponent } from './modify-detail-professor.component';

describe('ModifyDetailProfessorComponent', () => {
  let component: ModifyDetailProfessorComponent;
  let fixture: ComponentFixture<ModifyDetailProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyDetailProfessorComponent]
    });
    fixture = TestBed.createComponent(ModifyDetailProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
