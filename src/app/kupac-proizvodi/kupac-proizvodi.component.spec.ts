import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacProizvodiComponent } from './kupac-proizvodi.component';

describe('KupacProizvodiComponent', () => {
  let component: KupacProizvodiComponent;
  let fixture: ComponentFixture<KupacProizvodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacProizvodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacProizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
