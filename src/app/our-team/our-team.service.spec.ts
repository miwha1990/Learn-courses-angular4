import { TestBed, inject } from '@angular/core/testing';

import { OurTeamService } from './our-team.service';

describe('OurTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurTeamService]
    });
  });

  it('should ...', inject([OurTeamService], (service: OurTeamService) => {
    expect(service).toBeTruthy();
  }));
});
