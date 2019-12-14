import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Daniel';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle : 'Primera',
      colonia : 'La Nueva Esperanza',
      numero : 273
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego la data!!'), 3500 );
  } );

  nombre2 = 'luis daniel guerrero ramirez';


  fecha = new Date ();

  video = 'HPATOuwxrxE';

  activar : boolean = true;
}
