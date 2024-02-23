import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.css']
})
export class LandigPageComponent implements OnInit{
  ngOnInit(): void {
      this.peliculasEnCines =[{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 78,
        poster: 'https://cdn.marvel.com/content/1x/marvsmposterbk_intdesign.jpg'
      },
      {
        titulo: 'Dedpool',
        fechaLanzamiento: new Date(),
        precio: 100,
        poster: 'https://m.media-amazon.com/images/I/51Gh9OaWVcL._AC_UF894,1000_QL80_.jpg'
      }];
  }
  peliculasEnCines;
  peliculasProximosEstrenos = [{
    // titulo: 'Spider-Man 4',
    //     fechaLanzamiento: new Date(),
    //     precio: 78
    //   },
    //   {
    //     titulo: 'Cars',
    //     fechaLanzamiento: new Date(),
    //     precio: 78
    //   },
    //   {
    //     titulo: 'Superman',
    //     fechaLanzamiento: new Date(),
    //     precio: 100
    //   },
    //   {
    //     titulo: 'Dedpool 4',
    //     fechaLanzamiento: new Date(),
    //     precio: 100

  }]

}
