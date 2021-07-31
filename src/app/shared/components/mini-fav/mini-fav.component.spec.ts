import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFavComponent } from './mini-fav.component';

describe('MiniFavComponent', () => {
  let component: MiniFavComponent;
  let fixture: ComponentFixture<MiniFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
