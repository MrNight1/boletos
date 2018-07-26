import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EventosComponent } from './eventos/eventos.component';
import { TblPruebaComponent } from './tbl-prueba/tbl-prueba.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'eventos', component: EventosComponent},
  { path: 'tabla', component: TblPruebaComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
