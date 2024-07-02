import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule],
  templateUrl: './reservefly.component.html',
  styleUrl: './reservefly.component.scss'
})
export class ReserveflightComponent {
  vuelos: any[] = [];

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.http.consult_get('/users/getFlights').subscribe({
      next: (data: any) => {
        if (data.status) {
          this.vuelos = Array.isArray(data.data) ? data.data : [];
        } else {
          console.error('Error al obtener los vuelos');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener los vuelos', error);
      }
    });
  }


  form_reserve_flight = new FormGroup({
    user: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destiny: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
  });

  reservarVuelo(){
    if(this.form_reserve_flight.valid){
      //debugger;
      this.http.consult_post('/users/flightRequest', this.form_reserve_flight.value).subscribe({
        next: (data: any) => {
          if(data.status === 'success'){
            alert('Solicitud enviada :D');
          }else{
            alert('Error al enviar solicitud');
            console.log('Error al enviar la solicitud de renta :(');
          }
        },
        error: (error: any) => {
          console.log(error.errors[0]);
          alert(`Error al pedir la renta del carro: ${error.errors}`);
          console.log('Error al pedir la renta del carro');
        }
      }
      );
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }
}
