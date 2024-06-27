const { comprobarData, insertData, getData } = require('../config/db.mongo');
//const { bcrypt } = require('bcryptjs');

const login = async (req, res) => {
    const {user, /*email,*/ password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data', user, /*email*/);

    const result = await comprobarData('Usuarios',{
        user,
        //email, 
        password,
    });

    console.log('rol: ', result.rol);

    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'Usuario y/o contraseña incorrectos',
                data: result
            }
        )
    }
    const rol = result.rol;
    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Se encontró el usuario',
        rol: rol,
        data: {
            user,
            //email,
            //password,
            rol
        }
    });
}

const carRequest = async (req, res) => {
    const { user, plate } = req.body;
    const type = 'Car Rental';

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data; User',user, "; P", plate);

    const result = await insertData('Solicitudes',{ //Solicitudes representa la colección dentro de la base de datos
        user,
        plate,
        type
    });

    if(result instanceof Error){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al registrar la solicitud de renta de Automóvil en base de datos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Solicitud de renta registrada',
        data: {
            user,
            type,
            plate
        }
    });
}

const flightRequest = async (req, res) => {
    const { user, origin, destiny, days } = req.body;
    const {type} = 'Flight Reservation';

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data: ', user, origin, destiny, days);

    const result = await insertData('Solicitudes',{ //Vuelos deberia representar la coleccion 
        user, 
        type,
        destiny,
        origin,
        days
    });
    
    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al registrar la solicitud de reserva de vuelo en base de datos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Solicitud de reserva vuelo registrada',
        data: {user, type, days, origin, destiny}
    });
}

const getFlights = async (req, res) => {
    console.log('Getting Flights');
    const result = await getData('Vuelos');
  
    if (result instanceof Error || result === null) {
      return res.status(500).json({
        status: false,
        message: 'Error al obtener los vuelos',
        data: result
      });
    }
  
    // Respuesta
    return res.status(200).json({
      status: true,
      message: 'Vuelos obtenidos correctamente',
      data: result
    });
  };
  

const getCars = async (req, res) => {
    console.log('Getting Cars');
    const result = await getData('Autos');
  
    if (result instanceof Error || result === null) {
      return res.status(500).json({
        status: false,
        message: 'Error al obtener los autos',
        data: result
      });
    }
  
    // Respuesta
    return res.status(200).json({
      status: true,
      message: 'Autos obtenidos correctamente',
      data: result
    });
}

module.exports = {
    login,
    carRequest,
    flightRequest,
    getFlights,
    getCars
};
