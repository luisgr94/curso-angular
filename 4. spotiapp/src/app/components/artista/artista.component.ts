import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista : any;
  loading : boolean;
  topTracks : any[];

  constructor(  private router : ActivatedRoute,
                private spotify : SpotifyService ) { 
    this.router.params.subscribe( response =>{
      this.getArtista( response['id'] );
      this.getTopTracks( response['id'] );
    });
  }

  getArtista( id : string ){
    this.loading = true;
    this.spotify.getArtista( id )
      .subscribe( response => {
        console.log( response );
        this.artista = response;
        this.loading = false;
      });

  }

  getTopTracks( id : string ){
    this.spotify.getTopTracks( id )
      .subscribe( response => {
        console.log( response );
        this.topTracks = response;
      });
  }
}
