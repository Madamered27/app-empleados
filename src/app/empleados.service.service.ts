import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  

  constructor(private ventanaEmergente : ServicioEmpleadosService) { 
    
  }
    
  
  empleados : Empleado[] = [
    new Empleado("Maria", "Lopez", "Comercial", 1500),
    new Empleado("Ana", "Gomez", "Gerente", 4500),
    new Empleado("Raul", "Vega", "Encargado", 2500),
    new Empleado("Martin", "Montiel", "Asistente", 1000)
  ]

  agregarEmpleadoService(empleado : Empleado){
    this.ventanaEmergente.muestraMensaje(`Datos ingresados: ${empleado.nombre} ${empleado.apellido}, ${empleado.cargo} $${empleado.salario}`)
    this.empleados.push(empleado);
  }

}
