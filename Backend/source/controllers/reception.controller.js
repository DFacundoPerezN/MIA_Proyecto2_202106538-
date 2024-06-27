const { insertData, deleteData, getData } = require('../config/db.mongo');
//const { bcrypt } = require('bcryptjs');

const carRequest = async (req, res) => {
    const { user, plate, type } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data; User; ',user, "; P: ", plate);

    const result = await deleteData('Solicitudes',{ //Solicitudes representa la colección dentro de la base de datos
        user,
        plate
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
            plate,
            type
        }
    });
}

const flightRequest = async (req, res) => {
    const { user, origin, destiny, days,type } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data: Usuario: ', user, " Ciudad de origen: ", origin, " Ciudad de destino: ", destiny, ' dias: ',days);

    const result = await deleteData('Solicitudes',{ //Vuelos deberia representar la coleccion 
        user,
        //type, 
        destiny,
        origin,
        days
    });
    
    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al buscar la solicitud de reserva de vuelo en base de datos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Solicitud de reserva vuelo eliminada',
        data: {user, days, origin, destiny, type}
    });
}

const getRequests = async (req, res) => {
    console.log('Getting Requests');
    const result = await getData('Solicitudes');
  
    if (result instanceof Error || result === null) {
      return res.status(500).json({
        status: false,
        message: 'Error al obtener las solicitudes',
        data: result
      });
    }
  
    // Respuesta
    return res.status(200).json({
      status: true,
      message: 'Solicitudes obtenidas correctamente',
      data: result
    });
}

module.exports = {
    carRequest,
    flightRequest,
    getRequests
};
