import { TestBed, inject } from '@angular/core/testing';

import { FindCoursesService } from './find-courses.service';

describe('FindCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindCoursesService]
    });
  });

  it('should ...', inject([FindCoursesService], (service: FindCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
