import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImagePostsComponent } from './random-image-posts.component';

describe('RandomImagePostsComponent', () => {
  let component: RandomImagePostsComponent;
  let fixture: ComponentFixture<RandomImagePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomImagePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
