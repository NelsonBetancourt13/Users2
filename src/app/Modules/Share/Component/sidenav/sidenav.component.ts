import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  menuNav=[
    {name: "Home", route: "home", icon: "home"},
    {name: "Usuarios", route: "usuario", icon: "assignment_ind"},
    {name: "Medicamentos", route: "medicamento", icon: "assignment"},
  ]


}
