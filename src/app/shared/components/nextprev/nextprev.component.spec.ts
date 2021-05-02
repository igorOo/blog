import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextprevComponent } from './nextprev.component';

describe('NextprevComponent', () => {
  let component: NextprevComponent;
  let fixture: ComponentFixture<NextprevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextprevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextprevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
