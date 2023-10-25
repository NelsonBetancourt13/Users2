import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Component/home/home.component";
import {UserComponent} from "../Users/Component/user/user.component";
import {MedicineComponent} from "../Medicines/Component/medicine/medicine.component";


const rutasHijas: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'medicine', component: MedicineComponent}

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
