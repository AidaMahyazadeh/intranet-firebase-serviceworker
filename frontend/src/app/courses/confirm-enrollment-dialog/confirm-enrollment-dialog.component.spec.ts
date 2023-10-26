import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEnrollmentDialogComponent } from './confirm-enrollment-dialog.component';

describe('ConfirmEnrollmentDialogComponent', () => {
  let component: ConfirmEnrollmentDialogComponent;
  let fixture: ComponentFixture<ConfirmEnrollmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmEnrollmentDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmEnrollmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
