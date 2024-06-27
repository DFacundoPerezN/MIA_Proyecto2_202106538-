const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const{
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_HOST,
    MONGO_DATABASE
} = process.env;

//const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_HOST}/?authSource=${MONGO_DATABASE}`;
const uri = 'mongodb://root:Proyecto2@localhost:27017';


const insertData = async(database, data) => {
    console.log('uri', uri);
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios');
        const coleccion = dbmongo.collection(database);
        const result = await coleccion.insertOne(data);
        return result;
    } catch (error) {
        console.error('Error insertData: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

const comprobarData = async(database, data) => {
    console.log('uri', uri);
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios');
        const coleccion = dbmongo.collection(database);
        const result = await coleccion.findOne(data);

        console.log('Resultado de la busqueda: ', result);
        if(result !== null){

            console.log('Contraseña correcta');
            return result;
        }
        console.log('Contraseña y/o usuario incorrecto');
        return result;

    } catch (error) {
        console.error('Error comprobarData: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

const deleteData = async(database, data) => {
    console.log('uri', uri);
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios'); //Usuarios representa la base de datos
        const coleccion = dbmongo.collection(database);
        const result = await coleccion.findOneAndDelete(data);
        //console.log('Se busco: ', data);
        console.log('Resultado de la busqueda: ', result);
        if(result !== null){
            return result;
        }
        console.log('No se encontró con los datos proporcionados');
        return result;

    } catch (error) {
        console.error('Error deleteData: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

const getData = async(database) => {
    console.log('uri', uri);
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios'); //Usuarios representa la base de datos
        const coleccion = dbmongo.collection(database);
        const result = await coleccion.find().toArray();
        //console.log('Resultado de la busqueda: ', result);
        if(result !== null){
            return result;
        }
        console.log('No se encontró con los datos proporcionados');
        return result;

    } catch (error) {
        console.error('Error getData: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
}

module.exports ={
    insertData,
    comprobarData,
    deleteData, 
    getData
};