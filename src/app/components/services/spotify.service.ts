import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio Spotify Listo!.');
   }

   getQuery(query:string){

    const url =`https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAzGxt-974gOccaGkfJrwPqt9IY522dqm8MO29IgiGa7qVBYSuAbehovnT7y9JkjdvxM4QTDb9GV-urDNU'
    });
    return this.http.get(url,{headers});
   }

   getNewRealeases(){

    // let headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCyhjyVbjn2Vlt5aAaz3UW_0oZLdrYcpyTW4rWsjDiq1k22cGgYa-ywEBuCuXGQkGnFXpDVrxNlyqKGEGo'
    // });

    // return  this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    //             .pipe(
    //               map(data=>{
    //                   return data['albums'].items;
    //               })
    //             )

    return this.getQuery('browse/new-releases?limit=20')
               .pipe(
                    map(data=>{
                        return data['albums'].items;
                    })
                  )
   }

   getArtistas(termino: string){

  //   let headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQAUyxCP3IP-Q2Fza2j32U6aY7VWqI2qqS7iL4s6NG1IEkQ7xL0285DPCxJvVeHxCcNK-Ym1HBed-E9CF4I'
  //   });

  //   return  this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=CO&offset=0&limit=15`,{headers})
  //               .pipe(
  //                 map(data=>{
  //                   return data['artists'].items;
  //                 })
  //               )
  //  }

  // const example = source.pipe(catchError(val => of(`I caught: ${val}`)));


    return this.getQuery(`search?query=${ termino }&type=artist&market=CO&offset=0&limit=15`)
              .pipe(
                  map(data=>{
                    return data['artists'].items;
                  })
                )
  }

  getArtistaId(id:string){

    return this.getQuery(`artists/${id}`);
   }

   getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe(
                map(data=>{
                    return data['tracks'];
                })
              )
   }
}
