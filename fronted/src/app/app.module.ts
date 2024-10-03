import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importa tu AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component'; // Asegúrate de que HomeComponent esté importado correctamente
import { RegistroComponent } from './components/auth/registro/registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegistroComponent, // Declara HomeComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importa AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
