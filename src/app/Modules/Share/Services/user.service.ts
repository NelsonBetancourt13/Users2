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


}
