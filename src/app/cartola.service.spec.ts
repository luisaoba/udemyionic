import { TestBed } from '@angular/core/testing';

import { CartolaService } from './cartola.service';

describe('CartolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartolaService = TestBed.get(CartolaService);
    expect(service).toBeTruthy();
  });
});
