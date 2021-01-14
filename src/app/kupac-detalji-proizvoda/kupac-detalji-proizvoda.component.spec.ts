import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacDetaljiProizvodaComponent } from './kupac-detalji-proizvoda.component';

describe('KupacDetaljiProizvodaComponent', () => {
  let component: KupacDetaljiProizvodaComponent;
  let fixture: ComponentFixture<KupacDetaljiProizvodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacDetaljiProizvodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacDetaljiProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
