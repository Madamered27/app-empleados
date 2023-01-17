import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
  
  empleados : Empleado[] = []
  nombre : String = "";
  apellido : String = "";
  cargo : String = "";
  salario : number = 0;
  private empleadoServiceData : EmpleadosServiceService;

  constructor(private router: Router, empleadoService : ServicioEmpleadosService, empleadoData : EmpleadosServiceService){ 
    this.empleadoServiceData = empleadoData;
  }

  ngOnInit(): void {
    this.empleados = this.empleadoServiceData.empleados;
  }


  agregarEmpleado(){
    let miEmpleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario)
    this.empleadoServiceData.agregarEmpleadoService(miEmpleado);
    this.router.navigate([""])
  }

  volverAlHome(){
    //el metodo navigate es el que permite ir a cualquier parte
    this.router.navigate([""])
  }

}
