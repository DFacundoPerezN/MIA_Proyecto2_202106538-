const { insertData } = require('../config/db.mongo');
//const { bcrypt } = require('bcryptjs');

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
    const { name, lastname, user, email, password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, lastname, user, email, password);

    const result = await insertData('Usuarios',{
        name,
        lastname,
        user,
        email, 
        password
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
        message: 'Usuario registrado',
        data: {
            name,
            lastname,
            user,
            email,
            password
        }
    });
}

const registerFly = async (req, res) => {
    const { name, lastname, user, email, password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data',name, lastname, user, email, password);

    // const result = await insertData('Usuarios',{
    //     name,
    //     lastname,
    //     user,
    //     email, 
    //     password
    // });

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
        message: 'Usuario registrado',
        data: {
            name,
            lastname,
            user,
            email,
            password
        }
    });
}


module.exports = {
    ciclio_for,
    register,
    registerFly
};
