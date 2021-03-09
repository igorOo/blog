import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldandautoComponent } from './worldandauto.component';

describe('WorldandautoComponent', () => {
  let component: WorldandautoComponent;
  let fixture: ComponentFixture<WorldandautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldandautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldandautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
