import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyCardComponent } from './sticky-card.component';

describe('StickyCardComponent', () => {
  let component: StickyCardComponent;
  let fixture: ComponentFixture<StickyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
