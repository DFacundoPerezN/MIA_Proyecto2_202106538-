# AviCar
AviCar el sistema que se desarrollará para el gestionamiento de viajes de todo turista alrededor del mundo. Con el fin de garantizar una completa y agradable experiencia en época de post pandemia. La finalidad es centralizar los datos y que el cliente haga la menor cantidad de validaciones al momento de planificar su viaje.

#### Objetivos
1. Aprender a administrar archivos y estructuras en NodeJS
2.  Comprender la funcionalidad de un flujo de archivos JSON
3.  Aplicar la teoría de archivos JSON
4.  Utilizar un framework (Angular, React, Vue)
5. Administrar los usuarios y permisos por medio de grupos
6. Restringir y administrar el acceso a los archivos de modo administrador, cliente y recepcionista.
7. Crear una aplicación visual
8. Utilizar los servicios de una nube (para este proyecto utilizaremos AWS)
9. Aprender el uso de una Base de Datos no relacional como MOngoDB

## Arquitectura
La arquitectura de esta aplicacion tiene el siguiente funcionamiento: El Usuario accede mediante su conexion a Internet a un cominio de AWS donde se encuentra una EC2, en este espacio hay contenedores de docker corriendo el frontend backend y la base de datos Asu vez se usa un sistema de S3, un bucket para guardar imagenes de los usuarios.

![imagen](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/5ee3f043-e060-4ad4-aea0-94a1991f34bc)


## Usuario IAM
El Usuario IAM es aquel que tiene la capacidad de acceder y configurar al bucket de imagens y con este darnos la posibilidad de leer y escribir la informacion del bucket.

_Polìtica del Bucket_ 

'''
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::202106538t22024/*"
        }
    ]
}
'''

# Backend
El backend fue manejado mediante el lenguaje Javascript y con un framework dentro de carpetas las cuales definian funciones de la configuracion, los controladores de cada rol de usuario, rutas entre otros.

_Aqui un ejemplo del backend en cuanto a como se guarda un usuario_
'''
const register = async (req, res) => {
    const { path, image, name, rol, user, email, password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, rol, user, email, path);

    await uploadFile2(path, image);
    //const pathAWS = await uploadFile(path, image);
    const pathAWS = `https://202106538t22024.s3.amazonaws.com/${path}`;
    console.log('Path AWS', pathAWS);

    const result = await insertData('Usuarios',{
        image: pathAWS,        
        name,
        rol,
        user,
        email, 
        password
    });

    if(result instanceof Error){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al registrar ussuario en la base de datos',
                data: result,
                image: pathAWS
            }
        )
    }

    //Respuesta
    return res.status(200).json({
        status: 'success',
        message: 'Usuario registrado',
        data: result,
        image: pathAWS
    });
}
'''


# Base de Datos
La base de datos que se utilizò fue la que proporciona MongoDB, esta fue levantada desde un contenedor en dockerfile y mediante un archivo Dockerfile.

# Frontend
El frontend tambien se trabajo con Javascript pero mediante la herramienta de Typescript que facilita la programación de este ya que actua como un interprete.
Para la estructura cion visual con el usuario se utilizaron archivos html. Y como frameworl de la API se trabajo con Angular.

'''
<main>
    <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <h3>Historial de Vuelos</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre del Usuario</th>
                        <th>Origen (Reeserva Boleto)</th>
                        <th>Destino (Reeserva Boleto)</th>
                        <th>Dias de viaje (Reeserva Boleto)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let flight of vuelos">
                        <td>{{flight.user}}</td>
                        <td>{{flight.origin}}</td>
                        <td>{{flight.destiny}}</td>
                        <td>{{flight.days}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        <div class="d-flex justify-content-center py-4">
                            <a href="index.html" class="logo d-flex align-items-center w-auto">
                                <img src="assets/img/logo.png" alt="">
                                <span class="d-none d-lg-block">NiceAdmin</span>
                            </a>
                        </div><!-- End Logo -->

                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="pt-4 pb-2">
                                    <h3 class="card-title text-center pb-0 fs-4">Admin</h3>
                                </div>                  
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</main><!-- End #main -->
'''

'''

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
  
'''


## Conclusiones 
1. MongoDB es una base de datos versatil y bastante facil de usar ademas al ser lno relacional requiere un buen uso.
2. AWS ofrece una variedea de soluciones para que puedas crear tus apginas web con bastantes funcionalidades
3. Conectar Backend, Frontend y Base de datos es una necesidad que con un buen framework y herramientas como docker es mas accsesible par alos desarrolladores.
