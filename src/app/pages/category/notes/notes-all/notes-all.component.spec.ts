import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAllComponent } from './notes-all.component';

describe('NotesAllComponent', () => {
  let component: NotesAllComponent;
  let fixture: ComponentFixture<NotesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
