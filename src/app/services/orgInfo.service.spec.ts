import { TestBed, inject } from '@angular/core/testing';

import { OrgInfoService } from './orgInfo.service';

describe('OrginfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgInfoService]
    });
  });

  it('should be created', inject([OrgInfoService], (service: OrgInfoService) => {
    expect(service).toBeTruthy();
  }));
});
