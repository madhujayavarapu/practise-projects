import { TestBed } from '@angular/core/testing';

import { FileUtilsService } from './file-utils.service';

describe('FileUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  function setup() {
    const service: FileUtilsService = TestBed.get(FileUtilsService);
    return service;
  }

  it('should be created', () => {
    const service: FileUtilsService = setup();
    expect(service).toBeTruthy();
  });

  describe('CSV:', () => {
    it('CSVToArray: should convert csv to array', () => {
      const service: FileUtilsService = setup();
      // need to write test cases.
    })

  })
});
