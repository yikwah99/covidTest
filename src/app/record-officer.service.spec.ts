import { TestBed } from '@angular/core/testing';

import { RecordOfficerService } from './record-officer.service';

describe('RecordOfficerService', () => {
  let service: RecordOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
