import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
  solicitudes: any[] = [];

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  //    MOSTRAR TABLA DE SOLICITUDES
  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(): void {
    this.http.consult_get('/reception/getRequests').subscribe({
      next: (data: any) => {
        if (data.status) {
          this.solicitudes = Array.isArray(data.data) ? data.data : [];
          console.log('Lista de solicitudes: ',this.solicitudes);
        } else {
          console.error('Error al obtener los vuelos');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener los vuelos', error);
      }
    });
  }

  form_reception_car = new FormGroup({
      user: new FormControl('', Validators.required),
      plate: new FormControl('', Validators.required),
    });

  manejarSolicitudCarro(){
    if(this.form_reception_car.valid){
      //debugger;
      this.http.consult_post('/reception/deleteCarRequest', this.form_reception_car.value).subscribe({

        next: (data: any) => {
          if(data.status === 'success'){
            alert('Solicitud manejada con exito :D');

          }else{
            console.log('Error al manejar la solicitud :(');
          }
        },
        error: (error: any) => {
          console.log(error.errors[0]);
          alert(`Error al manejar la solicitud de renta decarro: ${error.errors}`);
          console.log('Error al manejar la solicitud de renta');
        }
      }
      );      
  }else{
    alert('Formulario de Solicitud incompleto');
    console.log('Formulario de la Solicitud de renta de vehiculo incompleto');
  }
  }

  form_reception_flight = new FormGroup({
    user: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destiny: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
  });

  manejarSolicitudVuelo(opcion: string){

  if(this.form_reception_flight.valid){
    //debugger;
    this.http.consult_post('/reception/deleteFlightRequest', this.form_reception_flight.value).subscribe({

      next: (data: any) => {
        if(data.status === 'success'){
          //alert('Carrito eliminado con exito :D');
          if(opcion === 'a'){
            console.log('Vuelo aceptado');

            this.http.consult_post('/reception/acceptFlightRequest', this.form_reception_flight.value).subscribe({
              next: (data: any) => {
                if(data.status === 'success'){
                  alert('Solicitud aprobada con exito :D');
                  console.log('Vuelo aceptado');
                }else{
                  //alert('Error al eliminar Carrito');
                  console.log('Error al manejar la solicitud :(');
                }
              },
              error: (error: any) => {
                console.log(error.errors[0]);
                alert(`Error al manejar la solicitud de reserva de vuelo: ${error.errors}`);
                console.log('Error al manejar la solicitud de renta');
              }
            });
            
          }else if (opcion === 'r'){
            console.log('Solicitud Rechazada');
            alert('Solicitud Rechazada correctamente');
          }else{
            console.log('Opcion no reconocida');
          }
        }else{
          //alert('Error al eliminar Carrito');
          console.log('Error al manejar la solicitud :(');
        }
      },
      error: (error: any) => {
        console.log(error.errors[0]);
        alert(`Error al manejar la solicitud de reserva de vuelo: ${error.errors}`);
        console.log('Error al manejar la solicitud de renta');
      }
    });
    
  }else{
    alert('Formulario del Vuelo incompleto');
    console.log('Formulario del Vuelo incompleto solo se recivio ', this.form_reception_flight.value);
  }
}
}
