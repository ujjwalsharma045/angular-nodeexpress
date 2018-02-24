import { TestBed, inject } from '@angular/core/testing';

import { GuestuserService } from './guestuser.service';

describe('GuestuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestuserService]
    });
  });

  it('should be created', inject([GuestuserService], (service: GuestuserService) => {
    expect(service).toBeTruthy();
  }));
});
