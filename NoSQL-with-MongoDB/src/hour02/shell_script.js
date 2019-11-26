const MongoClient = require('mongodb').MongoClient;
newDB = MongoClient.getDB("newDB");
newDB.createCollection("newCollection");


console.log("Hostname:");
console.log("\t"+hostname());
console.log("Date:");
console.log("\t"+Date());
db = connect("localhost/admin");
console.log("Admin Collections:");
const names = db.getCollectionNames();
console.log(names);
// console.logjson(db.getCollectionNames());