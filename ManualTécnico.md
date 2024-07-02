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



## Conclusiones 
