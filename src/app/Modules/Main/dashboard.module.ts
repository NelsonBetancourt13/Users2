import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Component/home/home.component';
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {ShareModule} from "../Share/share.module";
import {UserModule} from "../Users/user.module";
import {MedicineModule} from "../Medicines/medicine.module";



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    UserModule,
    MedicineModule
  ]
})
export class DashboardModule { }
