import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceService } from '../empleados.service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  empleados : Empleado[] = []
  nombre : String = "";
  apellido : String = "";
  cargo : String = "";
  salario : number = 0;
  id : number;
  accion : number;
  private empleadoServiceData : EmpleadosServiceService;

  constructor(private router: Router, private route: ActivatedRoute, empleadoService : ServicioEmpleadosService, empleadoData : EmpleadosServiceService){ 
    this.empleadoServiceData = empleadoData;
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadoServiceData.empleados;
    this.id = this.route.snapshot.params['id']
    let empleado : Empleado = this.empleadoServiceData.buscarEmpleado(this.id);
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
  }


  accionEmpleado(){
    if(this.accion == 1){
      let miEmpleado = new Empleado(this.nombre, this.apellido, this.cargo, this.salario)
      this.empleadoServiceData.modificarEmpleado(this.id,miEmpleado);
      this.router.navigate([""])
    }else{
      this.empleadoServiceData.eliminarEmpleado(this.id);
      this.router.navigate([""])
    }
   
  }


  volverAlHome(){
    //el metodo navigate es el que permite ir a cualquier parte
    this.router.navigate([""])
  }
}
