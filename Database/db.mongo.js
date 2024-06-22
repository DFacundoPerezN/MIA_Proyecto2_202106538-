const {MongoClient} = require('mongodb');

const{
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_HOST,
    MONGO_DATABASE
} = process.env;

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_HOST}/?authSource=${MONGO_DATABASE}`;

const instertData = async (collection, data) => {  
    const MongoClient = new MongoClient(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_HOST}/?authSource=${MONGO_DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); 

    try{
        await MongoClient.connect();
        const dbmongo = MongoClient.db(MONGO_DATABASE);
        const response = await dbmongo.collection(collection).insertOne(data);
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
        return error;
    }
}
