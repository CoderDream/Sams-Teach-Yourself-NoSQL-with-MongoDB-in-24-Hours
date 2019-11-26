const print_util = require("../../src/util/print_util");

// mongo = new Mongo("localhost");

// newDB = mongo.getDB("newDB");
// newDB.createCollection("newCollection");
const mongodbUrl = 'mongodb://localhost:27017';
const dbName = 'nosql';  // 数据库名
const MongoClient = require('mongodb').MongoClient;
// let newDB = MongoClient.db("newDB");
// let newColl = newDB.collection("newCollection");


let client = MongoClient.connect(mongodbUrl, {useUnifiedTopology: true});
let db = client.db(dbName);
let newColl = db.collection("newCollection");
print_util.print(newColl);