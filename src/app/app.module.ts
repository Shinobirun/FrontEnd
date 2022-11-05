import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FotoComponent } from './components/foto/foto.component';
import { IconosSocialesComponent } from './components/iconos-sociales/iconos-sociales.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoComponent,
    IconosSocialesComponent,
    DropdownComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
