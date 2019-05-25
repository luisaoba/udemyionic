import { TestBed } from '@angular/core/testing';

import { MoovieService } from './moovie.service';

describe('MoovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoovieService = TestBed.get(MoovieService);
    expect(service).toBeTruthy();
  });
});
