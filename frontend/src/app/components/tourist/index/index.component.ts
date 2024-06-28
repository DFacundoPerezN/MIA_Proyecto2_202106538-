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
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(
    private http: UsuarioService,
    private router: Router
  ){}


  irFlight(){
    console.log('vamos a reservar viaje en avión');
    this.router.navigate(['tourist/reserveFlight']);
  }

  irCar(){
    console.log('vamos a rentar un carro');
    this.router.navigate(['tourist/rentCar']);
  }


  irLogin(){
    this.router.navigate(['login']);
  }

}
