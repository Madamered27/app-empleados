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

  buscarEmpleado(id : number){
    let empleado : Empleado = this.empleados[id];
    return empleado;
  }

  modificarEmpleado(id : number, empleado : Empleado){
    let empleadoModificado = this.empleados[id];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(id : number){
    this.empleados.splice(id,1);
  }

}
