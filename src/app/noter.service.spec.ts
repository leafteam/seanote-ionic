import { TestBed } from '@angular/core/testing';

import { NoterService } from './noter.service';

describe('NoterService', () => {
  let service: NoterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
