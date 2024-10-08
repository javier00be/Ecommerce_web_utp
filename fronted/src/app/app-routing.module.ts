import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir la ruta base a 'home'
  { path: 'home', component: HomeComponent }, // Define la ruta para HomeComponent
  { path: 'login', component: LoginComponent }, // Ruta para el componente Login
  { path: 'registro', component: RegistroComponent } // Ruta para el componente Registro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Usa RouterModule.forRoot() para las rutas principales
  exports: [RouterModule] // Asegúrate de exportar RouterModule
})
export class AppRoutingModule { }
