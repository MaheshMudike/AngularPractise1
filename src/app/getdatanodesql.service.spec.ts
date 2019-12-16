import { TestBed } from '@angular/core/testing';

import { GetdatanodesqlService } from './getdatanodesql.service';

describe('GetdatanodesqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdatanodesqlService = TestBed.get(GetdatanodesqlService);
    expect(service).toBeTruthy();
  });
});
