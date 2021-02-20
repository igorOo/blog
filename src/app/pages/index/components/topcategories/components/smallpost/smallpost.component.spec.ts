import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallpostComponent } from './smallpost.component';

describe('SmallpostComponent', () => {
  let component: SmallpostComponent;
  let fixture: ComponentFixture<SmallpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
