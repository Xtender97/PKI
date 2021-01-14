import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavacPorudzbineComponent } from './prodavac-porudzbine.component';

describe('ProdavacPorudzbineComponent', () => {
  let component: ProdavacPorudzbineComponent;
  let fixture: ComponentFixture<ProdavacPorudzbineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdavacPorudzbineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavacPorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
