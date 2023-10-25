import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './Component/user/user.component';
import {MaterialModule} from "../Share/angular.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
