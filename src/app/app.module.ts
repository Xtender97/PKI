import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { KupacProizvodiComponent } from './kupac-proizvodi/kupac-proizvodi.component';
import { ProdavacPorudzbineComponent } from './prodavac-porudzbine/prodavac-porudzbine.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegisterComponent } from './register/register.component';
import { KupacDetaljiProizvodaComponent } from './kupac-detalji-proizvoda/kupac-detalji-proizvoda.component';
import { KupacKorpaComponent } from './kupac-korpa/kupac-korpa.component';
import { NalogComponent } from './nalog/nalog.component';
import { GrowlComponent } from './growl/growl.component';
import { NewProizvodComponent } from './new-proizvod/new-proizvod.component';


@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    LoginComponent,
    KupacProizvodiComponent,
    ProdavacPorudzbineComponent,
    WelcomePageComponent,
    RegisterComponent,
    KupacDetaljiProizvodaComponent,
    KupacKorpaComponent,
    NalogComponent,
    GrowlComponent,
    NewProizvodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
