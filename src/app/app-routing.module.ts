import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KupacDetaljiProizvodaComponent } from './kupac-detalji-proizvoda/kupac-detalji-proizvoda.component';
import { KupacProizvodiComponent } from './kupac-proizvodi/kupac-proizvodi.component';
import { LoginComponent } from './login/login.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
