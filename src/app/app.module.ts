import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Modules/Main/Page/dashboard/dashboard.component';
import {DashboardModule} from "./Modules/Main/dashboard.module";
import {RouterModule, Routes} from "@angular/router";
import {DashboardRutasModule} from "./Modules/Main/dashboard-rutas.module";
import {ShareModule} from "./Modules/Share/share.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const rutas: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
]


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    RouterModule.forRoot(
      rutas,
      {enableTracing:false, useHash:true}
    ),
    BrowserModule,
    DashboardModule,
    DashboardRutasModule,
    BrowserAnimationsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
