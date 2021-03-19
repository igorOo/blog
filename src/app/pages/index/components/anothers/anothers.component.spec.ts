import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothersComponent } from './anothers.component';

describe('AnothersComponent', () => {
  let component: AnothersComponent;
  let fixture: ComponentFixture<AnothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnothersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
