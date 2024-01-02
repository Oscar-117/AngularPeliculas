import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines =[{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 78
      },
      {
        titulo: 'Dedpool',
        fechaLanzamiento: new Date(),
        precio: 100
      }]
    }, 3000);
    

  }
  title = 'front-end';
  peliculasEnCines;
  peliculasProximosEstrenos = [{
    titulo: 'Spider-Man 4',
        fechaLanzamiento: new Date(),
        precio: 78
      },
      {
        titulo: 'Cars',
        fechaLanzamiento: new Date(),
        precio: 78
      },
      {
        titulo: 'Superman',
        fechaLanzamiento: new Date(),
        precio: 100
      },
      {
        titulo: 'Dedpool 4',
        fechaLanzamiento: new Date(),
        precio: 100

  }]
}
