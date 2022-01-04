import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmMessageComponent } from './user-confirm-message.component';

describe('UserConfirmMessageComponent', () => {
  let component: UserConfirmMessageComponent;
  let fixture: ComponentFixture<UserConfirmMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
