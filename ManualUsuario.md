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


# Funcionalidad
## Login
El login es el área de iniciar sesión donde se pide que ingrese un usuario y su contraseña. Esto realizará una petición y búsqueda en la base de datos donde, según su rol como usuario, se le redirige a la página de usuario turista, recepcionista o administrador.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/162949e7-3b75-41f6-992f-bfddce571823)


## Turista
En la página del usuario turista tendrá dos botones donde se le dará la opción de ir a reservar vuelos o rentar un automóvil.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/b82e05d9-c444-4f41-9aa4-8bb14c055bf0)

### Reservar boleto de avión
En este sitio se desplegará una lista con los vuelos que hay.
Abajo de esta lista se tendrá un cuadro para ingresar datos de un vuelo que desea ser reservado.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/6040fa61-b38c-42ec-928e-e02722179b2e)


### Rentar automóvil
En esta página se desplegará una lista con los vehículos que hay 
Abajo de esta lista se tendrá un cuadro para ingresar datos del automóvil que el turista quisiese reservar.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/b9d4e612-ce4b-4c0a-8e04-59afcc6a7f2b)


## Recepcionista
El recepcionista tendrá una página donde se le despliega un botón para ir a manejar las solicitudes de vuelo y otro botón para ir a una página donde manejar las solicitudes de renta de vehículos.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/5919ea53-b7de-4ebf-bd4b-6e4a81489fa4)



### Manejo de solicitudes de vehículo
En esta página se desplegará una lista con las solicitudes de renta de vehículos.
Abajo de esta lista se tendrá un cuadro para ingresar datos de la solicitud y la opción de rechazarla o aceptarla.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/7ca5ed3c-472f-4400-864b-c6dd11bc08cd)


### Manejo de solicitudes de vuelo
En este sitio se desplegará una lista con las solicitudes de vuelo hechas por los usuarios turistas.
Abajo de esta lista se tendrá un cuadro para ingresar datos de la solicitud y la opción de rechazarla o aceptarla.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/75c508a4-ab9f-4401-ac74-2c60f73f2f28)



## Administrador
El administrador tendrá control sobre la creación de nuevos usuarios, vuelos y rentas de vehículos. Estas acciones se realizan en su respectiva página a la que se accede mediante los botones.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/f2ee0ce8-5b09-4dd7-b5d1-867d9ab83913)


### Registro de Usuarios
Para crear un usuario, se le solicitará que llene los campos:
-   Nombre
-   Apellido
-   Usuario
-   Contraseña
-   Confirmacion de contraseña
-   Rol
-   Imagen de perfil
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/dd801b4d-aa7b-4847-bc80-c2b8de783f19)



### Registro de Vuelos
Para crear un nuevo vuelo, se le solicitará que rellene los siguientes campos:
-   Nombre de la agencia
-   Ciudad de origen
-   Ciudad de destino
-   Días de vuelo
-   Precio de vuelo
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/59910610-6497-4ca6-97fd-61b64ff57e95)


### Registro de Vehículos
Para crear un nuevo vehículo, se le solicitará que rellene los campos:
-   Nombre de la agencia
-   Marca
-   Placa
-   Modelo
-   Precio de renta
-   Ciudad en la que se encuentra el vehículo
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/35984327-d104-49f2-a377-ecf489a68858)

### Elimiar Usuario
El administrador podrá eliminar a un usuario brindando su nombre de usuario y contraseña.

### Elimiar Vehículo
También podrá eliminar a un carro de renta dando su placa.

### Elimiar Usuario
Asi mismo el administrador podrá eliminar a un usuario brindando algunos datos de este.
![image](https://github.com/DFacundoPerezN/MIA_Proyecto2_202106538-/assets/98927736/b2644c6a-dbe4-4ae0-98a3-62120d6c42ad)

