import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


const base_url = "http://localhost:8080/API/Users";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


    //METODO PARA OBTENER TODOS LOS USUARIOS DESDE LA API-REST
    getUsers(){

    const endpoint = `${base_url}/List`;
    return this.http.get(endpoint);

    }

    //METODO PARA GUARDAR UN USUARIO CONSUMIENDO LA API-REST

    saveUser(body:any){

      const endpoint = `${base_url}/New`;
      return this.http.post(endpoint,body);

    }


    //METODO ACTUALIZAR USUARIOS

    updateUser(body: any, id: any){

      const endpoint = `${base_url}/Update/${id}`;
      return this.http.put(endpoint,body);

    }


    eliminarUser(id:any){

      const endpoint = `${base_url}/Delete/${id}`;
      return this.http.delete(endpoint);

    }

}
