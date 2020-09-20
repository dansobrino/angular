import { TestBed } from '@angular/core/testing';

import { MgServiceService } from './mg-service.service';

describe('MgServiceService', () => {
  let service: MgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
