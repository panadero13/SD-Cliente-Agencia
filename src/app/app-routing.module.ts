import { LoginComponent } from './login/login.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'vuelos', component:VuelosComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
