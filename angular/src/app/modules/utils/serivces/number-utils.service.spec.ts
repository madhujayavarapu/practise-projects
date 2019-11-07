import { TestBed } from '@angular/core/testing';

import { NumberUtilsService } from './number-utils.service';

describe('NumberUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberUtilsService = TestBed.get(NumberUtilsService);
    expect(service).toBeTruthy();
  });
});
