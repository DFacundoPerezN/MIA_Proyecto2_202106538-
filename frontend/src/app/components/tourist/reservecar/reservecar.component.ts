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
  templateUrl: './reservecar.component.html',
  styleUrl: './reservecar.component.scss'
})

export class ReservecarComponent {
  cars: any[] = [];

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.http.consult_get('/users/getCars').subscribe({
      next: (data: any) => {
        if (data.status) {
          this.cars = Array.isArray(data.data) ? data.data : [];
        } else {
          console.error('Error al obtener los vuelos');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener los vuelos', error);
      }
    });
  }

  form_reserve_car = new FormGroup({
    user: new FormControl('', Validators.required),
    plate: new FormControl('', Validators.required),
  });

  reservarCarro(){
    if(this.form_reserve_car.valid){
      //debugger;
      this.http.consult_post('/users/carRequest', this.form_reserve_car.value).subscribe({
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
