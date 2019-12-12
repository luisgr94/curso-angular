import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes : any []; 
  term : any;

  constructor(private activatedRoute : ActivatedRoute,
              private _heroesService : HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log( this.heroes );
    });
  }

}
