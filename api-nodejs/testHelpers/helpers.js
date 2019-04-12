let bodyParer = require('body-parser');
import assert from 'assert';
let MongoClient = require('mongodb').MongoClient;
import MongodbMemoryServer from 'mongodb-memory-server';
// let MongoClient = require('mongo-mock').MongoClient;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

class Helpers {

  async connectToDb() {

    let mongoServer = new MongodbMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    let db = await MongoClient.connect(mongoUri);
    db.inMemoryServer = mongoServer;
    return db;

    // let db = await MongoClient.connect('mongodb://localhost:27017/test1');
    // // await this.deleteEverythingInDb(db);
    // return db;
  }

  async deleteEverythingInDb(db) {
    assert(db, 'db is required');
    await db.collection('data').remove({});
  }

  async closeDb(db) {
    await this.deleteEverythingInDb(db);
    await db.close();
    await db.inMemoryServer.stop();
  }

  getExpressApp() {
    let app = require('express')();
    app.use(bodyParer.json({limit: '5000mb'}));
    app.use((req, res, next) => {
      req.JWT_SECRET = "abc";
      next();
    });

    return app;
  }

  getSampleUserTurnData() {
    return {type: 'userTurn', value: 1};
  }

  getSampleBoardData() {
    return {type: 'board', value: [[1]]};
  }

  async insertSampleUserTurnAndBoardDataToDb(db) {
    await db.collection('data').insertOne(this.getSampleUserTurnData());
    await db.collection('data').insertOne(this.getSampleBoardData());
    return true;
  }
}

module.exports = Helpers;
