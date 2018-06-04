import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista :any = {};
  loadingArtist: boolean;
  topTracks:Array<any> = [];

  constructor(private router:ActivatedRoute,
              private spotifyService:SpotifyService) { 

    this.loadingArtist = true;
    this.router.params.subscribe(params=>{
       this.artistaId(params['id']);
      this.getTopTracks(params['id']);
    
    });
  }

  ngOnInit() {
  }

  artistaId(id:string){
    // this.loadingArtist = true;
    this.spotifyService.getArtistaId(id)
    .subscribe(resp=>{
      this.artista = resp;
      this.loadingArtist = false;
    })
  }

  getTopTracks(id:string){

    this.spotifyService.getTopTracks(id)
        .subscribe(resp=>{
          this.topTracks = resp;
          console.log(this.topTracks)
        })   
  }

}
