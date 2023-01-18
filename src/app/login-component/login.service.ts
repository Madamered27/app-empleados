import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";



@Injectable()
export class LoginService{

    constructor(private router:Router){}

    token:string;

    login(email:string, password:string){

        //devuelve una promesa
        //promesa es una funcion que no puede retornar todavia el valor por que aun no se conoce
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response =>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        return this.token;
    }

    isLogueado(){
        return this.token;
    }

    logout(){
        firebase.auth().signOut().then(()=>{
        this.token = '';
        this.router.navigate(['/']);
        });
    }

}

