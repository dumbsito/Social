import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
},
 {
  path:"perfil",
  component:PerfilComponent
 },{
  path:"",
  component:LoginComponent
 },
 {
  path:"inicio",
  component:InicioComponent
 },
 {
  path:"login",
  component:LoginComponent
 },
 {
    path:"**",
    redirectTo:""
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
