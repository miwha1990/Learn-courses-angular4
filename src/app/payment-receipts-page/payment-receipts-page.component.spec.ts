import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiptsPageComponent } from './payment-receipts-page.component';

describe('PaymentReceiptsPageComponent ', () => {
  let component: PaymentReceiptsPageComponent ;
  let fixture: ComponentFixture<PaymentReceiptsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentReceiptsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiptsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
