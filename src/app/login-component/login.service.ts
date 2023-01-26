import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from "ngx-cookie-service";



@Injectable()
export class LoginService{

    constructor(private router:Router, private cookies:CookieService){}

    token:string;

    login(email:string, password:string){

        //devuelve una promesa
        //promesa es una funcion que no puede retornar todavia el valor por que aun no se conoce
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response =>{

                //cuando el usuario se autentica en la base de datos, se genera el token y se almacena en una cookie
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token = token;
                        this.cookies.set("token", token);
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        //return this.token;
        return this.cookies.get("token");
    }

    isLogueado(){
        //return this.token;
        return this.cookies.get("token");
    }

    logout(){
        firebase.auth().signOut().then(()=>{
        this.token = '';
        this.cookies.set("token", this.token);
        this.router.navigate(['/']);
        window.location.reload();
        });
    }

}

