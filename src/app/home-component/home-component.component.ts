import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{

  
  titulo = 'Listado de empleados';
  private empleadoService : ServicioEmpleadosService;
  private empleadoServiceData : EmpleadosServiceService;

  constructor(empleadoService : ServicioEmpleadosService, empleadoData : EmpleadosServiceService){
    this.empleadoService = empleadoService;
    this.empleadoServiceData = empleadoData;
  }
  ngOnInit(): void {
    //usamos variable para almacenar lo que devuelve el subscribe()
    this.empleadoServiceData.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados)
      this.empleados = Object.values(misEmpleados);
      this.empleadoServiceData.setEmpleados(this.empleados);
    });
  }
  empleados : Empleado[] = []
  nombre : String = "";
  apellido : String = "";
  cargo : String = "";
  salario : number = 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario)
    this.empleadoServiceData.agregarEmpleadoService(miEmpleado);
  }
}
