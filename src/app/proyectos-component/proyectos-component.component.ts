import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  constructor(private router: Router){  }

  volverAlHome(){

    //el metodo navigate es el que permite ir a cualquier parte
    this.router.navigate([""])
  }

}
