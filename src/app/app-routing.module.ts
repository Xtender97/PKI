import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KupacDetaljiProizvodaComponent } from './kupac-detalji-proizvoda/kupac-detalji-proizvoda.component';
import { KupacKorpaComponent } from './kupac-korpa/kupac-korpa.component';
import { KupacProizvodiComponent } from './kupac-proizvodi/kupac-proizvodi.component';
import { LoginComponent } from './login/login.component';
import { NalogComponent } from './nalog/nalog.component';
import { NewProizvodComponent } from './new-proizvod/new-proizvod.component';
import { ProdavacPorudzbineComponent } from './prodavac-porudzbine/prodavac-porudzbine.component';
import { RegisterComponent } from './register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {path:'', component: WelcomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'kupac', component: KupacProizvodiComponent},
  {path:'detalji', component: KupacDetaljiProizvodaComponent},
  {path:'prodavac', component: ProdavacPorudzbineComponent},
  {path:'cart', component: KupacKorpaComponent},
  {path:'nalog', component: NalogComponent},
  {path:'noviproizvod', component: NewProizvodComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
