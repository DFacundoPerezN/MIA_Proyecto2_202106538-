const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE
} = process.env;

const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

const insertData = async (database, data) => {
  console.log('uri', uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
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

const comprobarData = async (database, data) => {
  console.log('uri', uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(database);
    const result = await coleccion.findOne(data);

    console.log('Resultado de la busqueda: ', result);
    if (result !== null) {
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

const deleteData = async (database, data) => {
  console.log('uri', uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(database);
    const result = await coleccion.findOneAndDelete(data);
    console.log('Resultado de la busqueda: ', result);
    if (result !== null) {
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

const getData = async (database) => {
  console.log('uri', uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(database);
    const result = await coleccion.find().toArray();
    if (result !== null) {
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
};

module.exports = {
  insertData,
  comprobarData,
  deleteData,
  getData
};