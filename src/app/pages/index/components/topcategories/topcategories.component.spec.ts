import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcategoriesComponent } from './topcategories.component';

describe('TopcategoriesComponent', () => {
  let component: TopcategoriesComponent;
  let fixture: ComponentFixture<TopcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
