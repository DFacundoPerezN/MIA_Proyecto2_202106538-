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
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  form_delete_user = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  eliminarUsuario(){
    if(this.form_delete_user.valid){
      //debugger;
        this.http.consult_post('/admin/delete', this.form_delete_user.value).subscribe({

          next: (data: any) => {
            if(data.status === 'success'){
              alert('Usuario eliminado con exito :D');

            }else{
              alert('Error al eliminar usuario');
              console.log('Error al eliminar usuario :(');
            }
          },
          error: (error: any) => {
            console.log(error.errors[0]);
            alert(`Error al eliminarlo: ${error.errors}`);
            console.log('Error al aliminar al usuario');
          }
        }
        );
      
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }

  form_delete_car = new FormGroup({
    plate: new FormControl('', Validators.required)
  });

  eliminarCarro(){
    if(this.form_delete_car.valid){
      //debugger;
        this.http.consult_post('/admin/deleteCar', this.form_delete_car.value).subscribe({

          next: (data: any) => {
            if(data.status === 'success'){
              alert('Carrito eliminado con exito :D');

            }else{
              alert('Error al eliminar Carrito');
              console.log('Error al eliminar el carrito :(');
            }
          },
          error: (error: any) => {
            console.log(error.errors[0]);
            alert(`Error al eliminar este carrito: ${error.errors}`);
            console.log('Error al aliminar al carrito');
          }
        }
        );      
    }else{
      alert('Formulario del Vehiculo incompleto');
      console.log('Formulario del Vehiculo incompleto');
    }
  }

  form_delete_fly = new FormGroup({
    name: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destiny: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required)
  });

  eliminarVuelo(){
    if(this.form_delete_fly.valid){
      //debugger;
        this.http.consult_post('/admin/deleteCar', this.form_delete_fly.value).subscribe({

          next: (data: any) => {
            if(data.status === 'success'){
              alert('Carrito eliminado con exito :D');

            }else{
              alert('Error al eliminar Carrito');
              console.log('Error al eliminar el carrito :(');
            }
          },
          error: (error: any) => {
            console.log(error.errors[0]);
            alert(`Error al eliminar este carrito: ${error.errors}`);
            console.log('Error al aliminar al carrito');
          }
        }
        );      
    }else{
      alert('Formulario del Vehiculo incompleto');
      console.log('Formulario del Vehiculo incompleto');
    }
  }

}
