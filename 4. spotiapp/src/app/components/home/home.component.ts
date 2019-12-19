import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones : any[] = [];
  loading : boolean;
  error : boolean;
  mensajeError : string;

  constructor( private spotify : SpotifyService ) { 

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( ( response : any ) => {
        console.log( response);
        this.nuevasCanciones = response;
        this.loading = false;
      }, ( errorResponse ) => {
        this.loading = false;
        this.error = true;
        console.log(errorResponse);
        this.mensajeError = errorResponse.error.error.message;
      });
  }


}
