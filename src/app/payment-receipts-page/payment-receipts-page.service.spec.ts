import { TestBed, inject } from '@angular/core/testing';

import { PaymentReceiptsPageService } from './payment-receipts-page.service';

describe('PaymentReceiptsPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentReceiptsPageService]
    });
  });

  it('should ...', inject([PaymentReceiptsPageService], (service: PaymentReceiptsPageService) => {
    expect(service).toBeTruthy();
  }));
});
