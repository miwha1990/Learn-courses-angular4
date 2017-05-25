import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCategoriesComponent } from './courses-categories.component';

describe('CoursesCategoriesComponent', () => {
  let component: CoursesCategoriesComponent;
  let fixture: ComponentFixture<CoursesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
