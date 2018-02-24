import { TestBed, inject } from '@angular/core/testing';

import { SlidersService } from './sliders.service';

describe('SlidersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidersService]
    });
  });

  it('should be created', inject([SlidersService], (service: SlidersService) => {
    expect(service).toBeTruthy();
  }));
});
