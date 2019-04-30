import { TestBed } from '@angular/core/testing';

import { DbdataService } from './dbdata.service';

describe('DbdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbdataService = TestBed.get(DbdataService);
    expect(service).toBeTruthy();
  });
});
