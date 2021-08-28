import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailRegComponent } from './confirm-email-reg.component';

describe('ConfirmEmailRegComponent', () => {
  let component: ConfirmEmailRegComponent;
  let fixture: ComponentFixture<ConfirmEmailRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmEmailRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
