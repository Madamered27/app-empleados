import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  // EventEmitter<string> es el tipo de @output()
  @Output() caracteristicaEmpleados = new EventEmitter<string>();

  private empleadoService : ServicioEmpleadosService;

  constructor(empleadoService : ServicioEmpleadosService){
    this.empleadoService = empleadoService;
  }

  agregaCaracteristicas(value: string){
    this.empleadoService.muestraMensaje(`Caracteristica a agregar: ${value}`)
    this.caracteristicaEmpleados.emit(value);
  }

}
