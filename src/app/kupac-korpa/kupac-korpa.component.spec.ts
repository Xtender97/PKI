import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacKorpaComponent } from './kupac-korpa.component';

describe('KupacKorpaComponent', () => {
  let component: KupacKorpaComponent;
  let fixture: ComponentFixture<KupacKorpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacKorpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacKorpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
