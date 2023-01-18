import { Injectable } from "@angular/core";
import { Empleado } from './empleado.model';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "./login-component/login.service";



// decorador para que la clase sea injectable
@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient, private loginService:LoginService){}
    


    obtenerEmpleados(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-de790-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    //httpClient necesita un observable (subscribe) para poder realizar acciones
    guardarEmpleados(empleados:Empleado[]){
        //metodo post guarda pero si hay repetidos se van a duplicar los registros
        //metodo put reemplaza la info que ya pueda existir en la bd
        this.httpClient.put('https://mis-clientes-de790-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Error: " + error),
        );
    }

    modificarEmpleado(id:number, empleado:Empleado){
        let url = 'https://mis-clientes-de790-default-rtdb.firebaseio.com/datos/' + id + '.json';
        this.httpClient.put(url, empleado).subscribe(
            response => console.log("Se ha modificado correctamente el empleado: " + response),
            error => console.log("Error: " + error),
        );
    }

    eliminarEmpleado(id:number){
        let url = 'https://mis-clientes-de790-default-rtdb.firebaseio.com/datos/' + id + '.json';
        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado correctamente el empleado: " + response),
            error => console.log("Error: " + error),
        );  
    }

}