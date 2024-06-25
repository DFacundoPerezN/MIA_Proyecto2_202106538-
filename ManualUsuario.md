# AviCar
AviCar el sistema que se desarrollará para el gestionamiento de viajes de todo turista alrededor del mundo. Con el fin de garantizar una completa y agradable experiencia en época de post pandemia. La finalidad es centralizar los datos y que el cliente haga la menor cantidad de validaciones al momento de planificar su viaje.

# Funcionalidad
## Login
El login es el área de iniciar sesión donde se pide que ingrese un usuario y su contraseña. Esto realizará una petición y búsqueda en la base de datos donde, según su rol como usuario, se le redirige a la página de usuario turista, recepcionista o administrador.

## Turista
En la página del usuario turista tendrá dos botones donde se le dará la opción de ir a reservar vuelos o rentar un automóvil.

### Reservar boleto de avión
En este sitio se desplegará una lista con los vuelos que hay.
Abajo de esta lista se tendrá un cuadro para ingresar datos de un vuelo que desea ser reservado.

### Rentar automóvil
En esta página se desplegará una lista con los vehículos que hay 
Abajo de esta lista se tendrá un cuadro para ingresar datos del automóvil que el turista quisiese reservar.

## Recepcionista
El recepcionista tendrá una página donde se le despliega un botón para ir a manejar las solicitudes de vuelo y otro botón para ir a una página donde manejar las solicitudes de renta de vehículos.

### Manejo de solicitudes de vehículo
En esta página se desplegará una lista con las solicitudes de renta de vehículos.
Abajo de esta lista se tendrá un cuadro para ingresar datos de la solicitud y la opción de rechazarla o aceptarla.

### Manejo de solicitudes de vuelo
En este sitio se desplegará una lista con las solicitudes de vuelo hechas por los usuarios turistas.
Abajo de esta lista se tendrá un cuadro para ingresar datos de la solicitud y la opción de rechazarla o aceptarla.

## Administrador
El administrador tendrá control sobre la creación de nuevos usuarios, vuelos y rentas de vehículos. Estas acciones se realizan en su respectiva página a la que se accede mediante los botones.

### Registro de Usuarios
Para crear un usuario, se le solicitará que llene los campos:
-   Nombre
-   Apellido
-   Usuario
-   Contraseña
-   Confirmacion de contraseña
-   Rol
-   


### Registro de Vuelos
Para crear un nuevo vuelo, se le solicitará que rellene los siguientes campos:
-   Nombre de la agencia
-   Ciudad de origen
-   Ciudad de destino
-   Días de vuelo
-   Precio de vuelo
-   

### Registro de Vehículos
Para crear un nuevo vehículo, se le solicitará que rellene los campos:
-   Nombre de la agencia
-   Marca
-   Placa
-   Modelo
-   Precio de renta
-   Ciudad en la que se encuentra el vehículo