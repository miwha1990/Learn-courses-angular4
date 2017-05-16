import { TestBed, inject } from '@angular/core/testing';

import { GetClassDataService } from './get-class-data.service';

describe('GetClassDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClassDataService]
    });
  });

  it('should ...', inject([GetClassDataService], (service: GetClassDataService) => {
    expect(service).toBeTruthy();
  }));
});
