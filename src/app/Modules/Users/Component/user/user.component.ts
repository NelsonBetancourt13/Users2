import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../../Share/Services/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit{


  private userService = inject(UserService);

  ngOnInit(): void {
   return  this.getUsers();

  }

  displayedColumns: string[] = ['id', 'nombre', 'apellido','edad','profesion','actions'];

  dataSource = new MatTableDataSource<UserElement>();


  getUsers() {

    this.userService.getUsers()

      .subscribe((data:any) =>{

        console.log("Respuesta Usuarios: ",data);
        this.procesoUsuarioRespuesta(data);


    },(error:any) =>{

        console.log("Error: ", error);

    })

  }

  procesoUsuarioRespuesta(resp:any){

    const dataUsers:UserElement[] = [];

    let  listaUsers = resp;

    listaUsers.forEach((element:UserElement) =>{
      dataUsers.push(element);

      this.dataSource = new MatTableDataSource<UserElement>(dataUsers);

    });

  }


}

export interface UserElement{
  id: number;
  name: string;
  lastname: string;
  age: number;
  profession: string;


}
