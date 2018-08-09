import { TestBed, inject } from '@angular/core/testing';

import { EventInfoService } from './event-info.service';

describe('EventInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventInfoService]
    });
  });

  it('should be created', inject([EventInfoService], (service: EventInfoService) => {
    expect(service).toBeTruthy();
  }));
});
