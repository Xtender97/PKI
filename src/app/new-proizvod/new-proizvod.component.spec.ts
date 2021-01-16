import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProizvodComponent } from './new-proizvod.component';

describe('NewProizvodComponent', () => {
  let component: NewProizvodComponent;
  let fixture: ComponentFixture<NewProizvodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProizvodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
