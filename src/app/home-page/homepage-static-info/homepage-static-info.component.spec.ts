import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageStaticInfoComponent } from './homepage-static-info.component';

describe('HomepageStaticInfoComponent', () => {
  let component: HomepageStaticInfoComponent;
  let fixture: ComponentFixture<HomepageStaticInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageStaticInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageStaticInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
