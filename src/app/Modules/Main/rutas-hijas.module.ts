import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Component/home/home.component";


const rutasHijas: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}

]




@NgModule({
  imports: [
    RouterModule.forChild(rutasHijas)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class RutasHijasModule {
}
