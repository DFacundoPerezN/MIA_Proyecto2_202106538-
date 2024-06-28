import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  form_login = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  logear(){
    //debugger;
    if(this.form_login.valid){
      //debugger;
        this.http.consult_post('/users/login', this.form_login.value).subscribe({

          next: (data: any) => {
            console.log("Data recibida: ",data);
            if(data.status === 'success'){

              if(data.rol === 'admin'){
                console.log('Login de Admin exitoso');
                this.router.navigate(['/admin']);
                
              } else if(data.rol === 'tourist'){
                console.log('Login de turista exitoso');
                this.router.navigate(['/tourist']);

              } else if(data.rol === 'receptionist'){
                console.log('Login de recepcionista exitoso');
                this.router.navigate(['/reception']);
              }else{
                console.log('Rol no reconocido: ', data.rol);
              } 

            }else{
              alert('Error al buscar usuario');
              console.log('Error al buscar usuario :(');
            }
          },
          error: (error: any) => {
            console.log(error.errors[0]);
            alert(`Error al logearse: ${error.errors}`);
            console.log('Error al ingresar a la base de datos');
          }
        }
        );
      
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }
}
