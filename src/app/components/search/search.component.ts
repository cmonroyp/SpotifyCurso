import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: Array<any>= [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string){
 
    this.loading = true;
    this.spotifyService.getArtistas(termino)
        .subscribe((resp)=>{
          console.log(resp);
          this.artistas = resp;
          this.loading = false;
        })
  }
}
