import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  menuNav=[
    {name: "CLINICAL S.A.S ", route: "", icon: "home"},
  ]

  menuNav2 =[
    {name: "USUARIOS", route: "user", icon: "assignment_ind"},
  ]

  menuNav3 = [
    {name: "MEDICAMENTOS", route: "medicine", icon: "assignment"},
  ]


}
