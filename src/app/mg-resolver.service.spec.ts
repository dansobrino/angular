import { TestBed } from '@angular/core/testing';

import { MgResolverService } from './mg-resolver.service';

describe('MgResolverService', () => {
  let service: MgResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
