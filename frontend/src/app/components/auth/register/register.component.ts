import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegistroComponent {

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  form_registro = new FormGroup({
    name: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  });

  // [
  //   Validators.minLength(8), 
  //   Validators.required,
  //   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.,:;!?(){}[\\]-_\'"ˋ~@#%^&*+=]).{8,}$')
  // ]

  registrar(){
    //debugger;
    if(this.form_registro.valid){
      if(this.form_registro.value.password === this.form_registro.value.confirm_password){
        this.http.consult_post('/admin/register', this.form_registro.value).subscribe({
          next: (data: any) => {
            if(data.status === 'success'){
              console.log('Usuario registrado');
              alert('Usuario registrado :D');
              // this.router.navigate(['']);
            }else{
              alert('Error al registrar usuario');
              console.log('Error al registrar usuario :(');
            }
          },
          error: (error: any) => {
            console.log(error.errors[0]);
            alert(`Error al registrar usuario: ${error.errors}`);
            console.log('Error al registrar usuario');
          }
        }
        );
      }else{
        alert('Las contraseñas no coinciden');
        console.log('Las contraseñas no coinciden');
      }
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }

}