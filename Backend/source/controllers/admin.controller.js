const { insertData } = require('../config/db.mongo');
const { deleteData } = require('../config/db.mongo');
const { getData } = require('../config/db.mongo');
//const { bcrypt } = require('bcryptjs');
const {uploadFile} = require('../config/bucket.js');
const {uploadFile2} = require('../config/bucket.js');
const { get } = require('../routes/admin.routes.js');

const ciclio_for = async (req, res) => {
    const { number } = req.params;

    //Manipulacion de datos
    let response = '';
    for (let i = 0; i < number; i++) {
        response += `Iteración ${i + 1} \n`;
    }

    console.log(response);

    //Respuesta
    res.status(200).json({ 
        message: response
    });    

    module.exports = {
        ciclio_for
    };  
};

const register = async (req, res) => {
    const { path, image, name, rol, user, email, password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, rol, user, email,/* image, */ path, password);

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

    ///Ruta para registrar un vuelo
const registerFlight = async (req, res) => {
    const { name, origin, destiny, days, price } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, origin, destiny, days, price);

    const result = await insertData('Vuelos',{ //Aqui 'Vuelos representa a la colección de la base de datos
        name,
        origin,
        destiny,
        days, 
        price
    });

    if(result instanceof Error){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al registrar ussuario en la base de datos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Vuelo registrado',
        data: {
            name,
            origin,
            destiny,
            days, 
            price
        }
    });
}

    //Ruta para registrar un carro
const registerCar = async (req, res) => {
    const { name, brand, plate, model, price, city } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, brand, plate, model, price, city);

    const result = await insertData('Autos',{
        name, brand, plate, model, price, city
    });

    if(result instanceof Error){
        return res.status(500).json(
            {
                status: false,
                message: 'Error al registrar carro en la base de datos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Carro registrado',
        data: {
            name, brand, plate, model, price, city
        }
    });
}

const elimination = async (req, res) => {
    const { user, password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data name: ',user, '; P', password);

    const result = await deleteData('Usuarios',{
        user, 
        password
    });

    
    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'Usuario y/o contraseña incorrectos',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Se elimino el usuario',
        data: {
            user,
            password
        }
    });
}

const eliminationFlight = async (req, res) => {
    const { name, origin, destiny, days } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data name: ', name, origin, destiny, days);

    const result = await deleteData('Vuelos',{ //Vuelos deberia representar la coleccion 
        days, 
        name,
        destiny,
        origin
    });
    
    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'No se encontro vuelo con la informacion proporcionada',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Se elimino el vuelo',
        data: {name, days, origin, destiny}
    });
}

const eliminationCar = async (req, res) => {
    const { plate } = req.body;
    
    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data name: ', plate);

    const result = await deleteData('Autos',{ //Autos deberia representar la coleccion 
        plate
    });
    
    if(result instanceof Error || result === null){
        return res.status(500).json(
            {
                status: false,
                message: 'No se encontro vehículo con la informacion proporcionada',
                data: result
            }
        )
    }

    //Respuesta
    res.status(200).json({
        status: 'success',
        message: 'Se elimino el auto',
        data: {plate}
    });
}

const getPeople = async (req, res) => {
    console.log('Getting Users');
    const result = await getData('Usuarios');
  
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
    ciclio_for,
    register,
    registerFlight,
    registerCar,
    elimination,
    eliminationFlight,
    eliminationCar,
    getPeople
};
