import { TestBed } from '@angular/core/testing';

import { TestcentreService } from './testcentre.service';

describe('TestcentreService', () => {
  let service: TestcentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestcentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
