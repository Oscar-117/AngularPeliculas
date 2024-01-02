import { Component, Input, OnInit } from '@angular/core';
//Para que funcione deberemos de importar Input y OnInit 
@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
//Para que funcione deberemos de agregar implements On Init ya que viene vacio e 
// @Input()
// listado;
// constructor(){}
// ngOnInit(): void { 
// }
export class ListadoGenericoComponent implements OnInit{

  @Input()
  listado;
  constructor(){}

  ngOnInit(): void {
    
  }

}
