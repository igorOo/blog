import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHourComponent } from './news-hour.component';

describe('NewsHourComponent', () => {
  let component: NewsHourComponent;
  let fixture: ComponentFixture<NewsHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
