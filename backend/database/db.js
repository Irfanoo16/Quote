const mongodb = require('mongodb');

let database;
const mongoClient = mongodb.MongoClient;

const uri = process.env.MONGO_DB_URL;

async function getDatabase() {
    try {
        let container = await mongoClient.connect(process.env.MONGO_DB_URL);
        database = await container.db('quote-bank');
        if (database) {
            console.log('conncted');
        }
        return database;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = getDatabase