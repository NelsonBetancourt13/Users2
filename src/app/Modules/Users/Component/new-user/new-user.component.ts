import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../Share/Services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})


export class NewUserComponent implements OnInit{

  private userService= inject(UserService);
  private dialogRef = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);


  public userForm: FormGroup;

  estadoFormulario: string = "";



  constructor(private fb: FormBuilder ) {

    this.estadoFormulario = "Agregar";

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required]

    });



    if (this.data!= null){
      this.updateForm(this.data);
      this.estadoFormulario = "Actualizar";
    }

  }

  ngOnInit(): void {
    console.log(this.data);
  }

  guardarUser(){

    let data = {
      name: this.userForm.get('name')?.value,
      lastname: this.userForm.get('lastname')?.value,
      age: this.userForm.get('age')?.value,
      profession: this.userForm.get('profession')?.value
    }

    if (this.data != null){

      // ACTUALIZAR USUARIO
      this.userService.updateUser(data, this.data.id)
        .subscribe((data:any) => {
          this.dialogRef.close(1);

        }, (error:any) =>{
          this.dialogRef.close(2);
        })

    }else {

      // CREAR NUEVO REGISTRO
      this.userService.saveUser(data)
        .subscribe((data:any)=>{

          console.log(data);
          this.dialogRef.close(1);

        }, (error:any) =>{
          this.dialogRef.close(2);
        })
    }

  }

  onCancel(){
    this.dialogRef.close(3);

  }

  updateForm(data:any){

    this.userForm = this.fb.group({
      name: [data.name, Validators.required],
      lastname: [data.lastname, Validators.required],
      age: [data.age, Validators.required],
      profession: [data.profession, Validators.required]

    });

  }


}
