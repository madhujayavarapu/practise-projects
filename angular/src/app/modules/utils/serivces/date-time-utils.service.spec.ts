import { TestBed } from '@angular/core/testing';

import { DateTimeUtilsService } from './date-time-utils.service';

describe('DateTimeUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateTimeUtilsService = TestBed.get(DateTimeUtilsService);
    expect(service).toBeTruthy();
  });
});
