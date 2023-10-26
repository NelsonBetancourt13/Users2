import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../../Share/Services/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {NewUserComponent} from "../new-user/new-user.component";
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit{

  private snackBar = inject(MatSnackBar);
  private userService = inject(UserService);
  public dialog = inject(MatDialog);

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

  openUserDialog(){

    const dialogRef = this.dialog.open(NewUserComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any )=> {

      if (result == 1){
        this.openSnackBar("Usuario Agregado","Exitoso");
        this.getUsers();
      }else if (result == 2){
        this.openSnackBar("Error al guardar el Usuario","Error");
      }

    });
  }


  openSnackBar(message:string, action: string): MatSnackBarRef<SimpleSnackBar>{

    return this.snackBar.open(message, action,{
        duration: 2000
    })

  }


}

export interface UserElement{
  id: number;
  name: string;
  lastname: string;
  age: number;
  profession: string;


}
