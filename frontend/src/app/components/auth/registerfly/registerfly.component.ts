import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registerfly',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './registerfly.component.html',
  styleUrl: './registerfly.component.scss'
})


export class RegisterflyComponent {

  constructor(
    private http: UsuarioService,
    private router: Router
  ){}

  form_registroFly = new FormGroup({
    name: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destiny: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  // [
  //   Validators.minLength(8), 
  //   Validators.required,
  //   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.,:;!?(){}[\\]-_\'"ˋ~@#%^&*+=]).{8,}$')
  // ]

  registrarVuelo(){
    //debugger;
    if(this.form_registroFly.valid){
      this.http.consult_post('/admin/registerFly', this.form_registroFly.value).subscribe({
        next: (data: any) => {
          if(data.status === 'success'){
            alert('Viaje en avión registrado :D');
          }else{
            alert('Error al registrar el viaje en avión');
            console.log('Error al registrar el vuelo :(');
          }
        },
        error: (error: any) => {
          console.log(error.errors[0]);
          alert(`Error al registrar vuelo: ${error.errors}`);
          console.log('Error al registrar vuelo');
        }
      }
      );
    }else{
      alert('Formulario incompleto');
      console.log('Formulario incompleto');
    }
  }
}
