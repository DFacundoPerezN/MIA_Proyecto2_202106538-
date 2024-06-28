import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registercar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './registercar.component.html',
  styleUrl: './registercar.component.scss'
})

export class RegistercarComponent {
  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  form_registro = new FormGroup({
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    plate: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  // [
  //   Validators.minLength(8), 
  //   Validators.required,
  //   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.,:;!?(){}[\\]-_\'"ˋ~@#%^&*+=]).{8,}$')
  // ]

  registrarAuto(){
    //debugger;
    if(this.form_registro.valid){
      this.http.consult_post('/admin/registerCar', this.form_registro.value).subscribe({
        next: (data: any) => {
          if(data.status === 'success'){
            alert('Auto registrado :D');
          }else{
            alert('Error al registrar el vehículo');
            console.log('Error al registrar el carro :(');
          }
        },
        error: (error: any) => {
          console.log(error.errors[0]);
          alert(`Error al registrar carro: ${error.errors}`);
          console.log('Error al registrar carro');
        }
      }
      );
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }
}
