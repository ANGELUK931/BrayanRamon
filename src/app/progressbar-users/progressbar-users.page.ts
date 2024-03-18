import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-progressbar-users',
  templateUrl: './progressbar-users.page.html',
  styleUrls: ['./progressbar-users.page.scss'],
})
export class ProgressbarUsersPage implements OnInit {

  constructor(private red:RedireccionamientoService) { }

  ngOnInit() {
  }
  redireccion(dir:string){
    this.red.navegar(dir);
  }

}
