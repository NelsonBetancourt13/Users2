import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "./angular.module";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports:[
    SidenavComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ShareModule { }
