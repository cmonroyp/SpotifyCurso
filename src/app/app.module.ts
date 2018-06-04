import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite hacer peticiones http
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';

//Rutas
import { AppRoutingModule } from './app.routes';
//pipes
import { NoimagePipe } from './components/pipes/noimage.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './components/pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PageNoFoundComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
