import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./Page/dashboard/dashboard.component";


const rutas: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren:() => import('./rutas-hijas.module').then(m => m.RutasHijasModule)
  }

]



@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class DashboardRutasModule {
}
