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


  vuelos: any[] = [];

  //    MOSTRAR TABLA DE VUELOS
  ngOnInit(): void {
    this.cargarVuelos();
  }

  cargarVuelos(): void {
    this.http.consult_get('/reception/getRequests').subscribe({
      next: (data: any) => {
        if (data.status) {
          this.vuelos = Array.isArray(data.data) ? data.data : [];
          console.log('Historial de vuelos: ',this.vuelos);
        } else {
          console.error('Error al obtener el historial de vuelos');
        }
      },
      error: (error: any) => {
        console.error('Error al intentar obtener y mostrar los vuelos', error);
      }
    });
  }

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
