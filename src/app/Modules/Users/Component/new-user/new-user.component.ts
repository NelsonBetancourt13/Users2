import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../Share/Services/user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})


export class NewUserComponent implements OnInit{

  private userService= inject(UserService);
  private dialogRef = inject(MatDialogRef);


  public userForm: FormGroup;

  constructor(private fb: FormBuilder ) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required]

    });

  }

  ngOnInit(): void {

  }

  guardarUser(){

    let data = {
      name: this.userForm.get('name')?.value,
      lastname: this.userForm.get('lastname')?.value,
      age: this.userForm.get('age')?.value,
      profession: this.userForm.get('profession')?.value
    }

    this.userService.saveUser(data)
      .subscribe((data:any)=>{

        console.log(data);
        this.dialogRef.close(1);

      }, (error:any) =>{
          this.dialogRef.close(2);
      })

  }

  onCancel(){
    this.dialogRef.close(3);

  }




}
