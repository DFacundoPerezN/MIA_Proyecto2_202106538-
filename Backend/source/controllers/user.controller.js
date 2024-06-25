const { comprobarData } = require('../config/db.mongo');
//const { bcrypt } = require('bcryptjs');

const login = async (req, res) => {
    const {user, /*email,*/ password } = req.body;

    //Manipulacion de datos e ingresarloa a la base de datos
    console.log('Recived Data', user, /*email,*/ password);

    const result = await comprobarData('Usuarios',{
        user,
        //email, 
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
        message: 'Se busco el usuario',
        data: {
            user,
            //email,
            password
        }
    });
}

module.exports = {
    login
};
