import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  empleados:Empleado[] = [];
  
  // los servicios que se quieran usar se tienen que injectar
  constructor(private ventanaEmergente:ServicioEmpleadosService, private dataServices:DataServices){}
    

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }

  obtenerEmpleados(){
    //devuelve un Observable (permiten operaciones asincronas, o sea actualizar en segundo plano la informacion que hay almacenada en un almacen de datos sin tener que estar realizando consultas repetitivas)
    //en segundo plano y sin que tengamos que hacer consultas de tipo select el Observable va a actualizar la info que hay en la bd
    //para poder usar objetos Observable hay que suscribirnos a ellos
    return this.dataServices.obtenerEmpleados();
  }

  agregarEmpleadoService(empleado : Empleado){
    this.ventanaEmergente.muestraMensaje(`Datos ingresados: ${empleado.nombre} ${empleado.apellido}, ${empleado.cargo} $${empleado.salario}`)
    this.empleados.push(empleado);
    this.dataServices.guardarEmpleados(this.empleados);
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
