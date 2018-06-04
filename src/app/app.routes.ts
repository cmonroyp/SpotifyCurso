import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent }, 
    { path: '', pathMatch: 'full', redirectTo:'home'},
    { path: '**', component: PageNoFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }