import { TestBed } from '@angular/core/testing';

import { ManagetestkitService } from './managetestkit.service';

describe('ManagetestkitService', () => {
  let service: ManagetestkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagetestkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
