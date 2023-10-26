import { TestBed } from '@angular/core/testing';

import { AdminAuthStorageService } from './admin-auth-storage.service';

describe('AdminAuthStorageService', () => {
  let service: AdminAuthStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
