import { TestBed, inject } from '@angular/core/testing';

import { CustomIconService } from './custom-icon.service';

describe('CustomIconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomIconService]
    });
  });

  it('should be created', inject([CustomIconService], (service: CustomIconService) => {
    expect(service).toBeTruthy();
  }));
});
