import { TestBed } from '@angular/core/testing';

import { DynamicscriptloaderService } from './dynamicscriptloader.service';

describe('DynamicscriptloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicscriptloaderService = TestBed.get(DynamicscriptloaderService);
    expect(service).toBeTruthy();
  });
});
