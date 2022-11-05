import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FotoComponent } from './components/foto/foto.component';
import { IconosSocialesComponent } from './components/iconos-sociales/iconos-sociales.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoComponent,
    IconosSocialesComponent,
    DropdownComponent,
    BannerComponent,
    AcercaDeComponent,
    TrabajosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
