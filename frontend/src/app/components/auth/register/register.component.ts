import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2'

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
  //    MOSTRAR TABLA DE USUARIOS 
  arrayUsuarios: any[] = [];

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(): void {
    this.http.consult_get('/admin/getUsers').subscribe({
      next: (data: any) => {
        if (data.status) {
          this.arrayUsuarios = Array.isArray(data.data) ? data.data : [];
        } else {
          console.error('Error al obtener los vuelos');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener los vuelos', error);
      }
    });
  }

  image: any = '';
  pathImage: any = '';
  pathAWS: any = '';

  form_registro = new FormGroup({
    path: new FormControl(''),
    image: new FormControl(''),
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
         
        const index = this.pathImage.indexOf(",");
        this.pathImage = this.pathImage.slice(index + 1);
        this.form_registro.value.image = this.pathImage;
        this.form_registro.value.path = this.image.name;
        console.log('IMAGEN ANTES DE API: ', /*this.form_registro.value.image,*/' PATH de la imagen', this.form_registro.value.path)

        this.http.consult_post('/admin/register', this.form_registro.value).subscribe({
          next: (data: any) => {
            if(data.status === 'success'){
              console.log('Usuario registrado');
              alert('Usuario registrado :D');
              console.log('IMAGEN: ', data.image)
              this.pathAWS = data.image;
              Swal.fire({
                title: 'Usuario registrado',
                text: 'Usuario registrado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              });
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

  onFileSelected(event: any){
    // Seleccionar el archivo y convertirlo a base64
    this.image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event:any) => {
      this.pathImage = event.target.result;
    }
    reader.readAsDataURL(this.image);
  }

  encodeFileAsBase64(file:any){
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', () =>{
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }


}