import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';  // Asegúrate de que el componente HomeComponent esté bien importado

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirigir la ruta base a 'home'
  { path: 'home', component: HomeComponent }  // Define la ruta para HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usa RouterModule.forRoot() para las rutas principales
  exports: [RouterModule]  // Asegúrate de exportar RouterModule
})
export class AppRoutingModule { }
