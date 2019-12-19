import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Aspersor de agua
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) { 
    console.log('Spotify service ready!');
  }

  getQuery( query : string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCdjGKDIJ5PbI_6mrakaHmV-wzG7s0Koef4kVry6vrVtQrcnq60A1y2xnbURnDHJJYONEhVU37zj5bPLAo'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    // Se usa el .pipe y map para filtrar la información, en este caso requerimos solo los items(nuevas canciones)
    return this.getQuery('browse/new-releases')
                  .pipe( map( response => {
                    return response['albums'].items
                  }));
  }

  getArtistas( termino : string ){

    const query : string = `search?q=${ termino }&type=artist&limit=20`;

    return this.getQuery( query )
      .pipe( map( response => {
        return response['artists'].items
      }));

  }


  getArtista( id : string ){
    
    const query : string = `artists/${ id }`;

    return this.getQuery( query );
      // .pipe( map( response => {
      //   return response['artists'].items
      // }));

  }

  getTopTracks( id : string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( response => response['tracks']));

  }

}
