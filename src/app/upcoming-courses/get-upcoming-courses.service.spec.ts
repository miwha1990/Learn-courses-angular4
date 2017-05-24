import { TestBed, inject } from '@angular/core/testing';

import { GetUpcomingCoursesService } from './get-upcoming-courses.service';

describe('GetUpcomingCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUpcomingCoursesService]
    });
  });

  it('should ...', inject([GetUpcomingCoursesService], (service: GetUpcomingCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
