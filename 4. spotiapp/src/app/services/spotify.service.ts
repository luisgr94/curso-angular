import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) { 
    console.log('Spotify service ready!');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBQpzCj3r22T8a5j7ZVozY4pyCrcl2L6g8u3DJqTDXSLJCCtveWfdiN9bhIDb1bw9KQag2eNiLvYfucv4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases' , { headers } );
      
  }
}
