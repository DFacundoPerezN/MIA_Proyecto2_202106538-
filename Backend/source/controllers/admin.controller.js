//const { insert}

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
    register
};