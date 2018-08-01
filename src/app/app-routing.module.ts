import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EventosComponent } from './eventos/eventos.component';
import { TblPruebaComponent } from './tbl-prueba/tbl-prueba.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'eventos', component: EventosComponent},
  { path: 'eventos/:id', component: EventosDetailComponent},
  { path: 'tabla', component: TblPruebaComponent},
  { path: 'form', component: EventosFormComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
