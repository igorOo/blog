import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntandprogsComponent } from './intandprogs.component';

describe('IntandprogsComponent', () => {
  let component: IntandprogsComponent;
  let fixture: ComponentFixture<IntandprogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntandprogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntandprogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
