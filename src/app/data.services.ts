import { Injectable } from "@angular/core";
import { Empleado } from './empleado.model';
import { HttpClient } from "@angular/common/http";



// decorador para que la clase sea injectable
@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}
    
    //httpClient necesita un observable (subscribe) para poder realizar acciones
    guardarEmpleados(empleados:Empleado[]){
        //metodo post guarda pero si hay repetidos se van a duplicar los registros
        //metodo put reemplaza la info que ya pueda existir en la bd
        this.httpClient.put('https://mis-clientes-de790-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Error: " + error),
        );
    }

    obtenerEmpleados(){
        return this.httpClient.get('https://mis-clientes-de790-default-rtdb.firebaseio.com/datos.json');
    }

}