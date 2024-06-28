import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-indexadmin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './indexadmin.component.html'
})

export class IndexadminComponent {
  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  irRegistrarUsuario(){
    console.log('vamos a registrar usuario');
    this.router.navigate(['admin/register']);
  }

  irRegistrarVuelo(){
    console.log('vamos a registrar viaje en avión');
    this.router.navigate(['admin/registerFly']);
  }

  irRegistrarCar(){
    console.log('vamos a registrar un carr');
    this.router.navigate(['admin/registerCar']);
  }

  irEliminar(){
    console.log('vamos a registrar un carr');
    this.router.navigate(['admin/delete']);
  }

  irLogin(){
    this.router.navigate(['login']);
  }

}
