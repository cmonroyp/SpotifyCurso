import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, map} from 'rxjs/operators';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: Array<any> =[];
  loading: boolean;
  messageError: boolean;

  constructor( private spotifyService: SpotifyService ) {

    this.loading = true;
    this.spotifyService.getNewRealeases()
        .subscribe((resp)=>{
          // console.log(resp.albums.items);
          this.nuevasCanciones = resp;
          console.log(this.nuevasCanciones)
          this.loading = false;
        },err=>{
          this.messageError = err.error.error.message;
          this.loading = false;
        })
   }

  ngOnInit() {
  }

}
