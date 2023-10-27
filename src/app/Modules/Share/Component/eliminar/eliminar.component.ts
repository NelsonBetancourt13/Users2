import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{

  private userService = inject(UserService);
  private dialogRef = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);


  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close(3)

  }

  eliminar(){
    if (this.data != null ){
      this.userService.eliminarUser(this.data.id)
        .subscribe((data:any) =>{
        this.dialogRef.close(1);
      }, (error:any) =>{
        this.dialogRef.close(2);
      })
    }else {
      this.dialogRef.close(2);
    }
  }



}
