import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSinglePageComponent } from './class-single-page.component';

describe('ClassSinglePageComponent', () => {
  let component: ClassSinglePageComponent;
  let fixture: ComponentFixture<ClassSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
