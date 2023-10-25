import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './Component/medicine/medicine.component';
import {MaterialModule} from "../Share/angular.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MedicineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicineModule { }
