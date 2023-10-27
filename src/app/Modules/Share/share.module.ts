import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "./angular.module";
import {HttpClientModule} from "@angular/common/http";
import { EliminarComponent } from './Component/eliminar/eliminar.component';



@NgModule({
  declarations: [
    SidenavComponent,
    EliminarComponent
  ],
  exports:[
    SidenavComponent
  ],

    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        NgOptimizedImage,
        HttpClientModule
    ]
})
export class ShareModule { }
