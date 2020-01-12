import { TestBed } from '@angular/core/testing';

import { EduserviceService } from './eduservice.service';

describe('EduserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EduserviceService = TestBed.get(EduserviceService);
    expect(service).toBeTruthy();
  });
});
