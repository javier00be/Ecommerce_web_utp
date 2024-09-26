import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importa tu AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';  // Asegúrate de que HomeComponent esté importado correctamente

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  // Declara HomeComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Importa AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
