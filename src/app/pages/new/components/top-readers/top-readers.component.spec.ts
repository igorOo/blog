import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReadersComponent } from './top-readers.component';

describe('TopReadersComponent', () => {
  let component: TopReadersComponent;
  let fixture: ComponentFixture<TopReadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopReadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
