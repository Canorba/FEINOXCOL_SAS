import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaNosotrosComponent } from './Componets/acerca-nosotros/acerca-nosotros.component';
import { NuestrosProductosComponent } from './Componets/nuestros-productos/nuestros-productos.component';
import { HomeComponent } from './Componets/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaNosotrosComponent,
    NuestrosProductosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
