import { TestBed } from '@angular/core/testing';

import { RecordTestService } from './record-test.service';

describe('RecordTestService', () => {
  let service: RecordTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
