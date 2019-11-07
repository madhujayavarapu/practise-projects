import { TestBed } from '@angular/core/testing';

import { DataUtilsService } from './data-utils.service';

describe('DataUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUtilsService = TestBed.get(DataUtilsService);
    expect(service).toBeTruthy();
  });
});
