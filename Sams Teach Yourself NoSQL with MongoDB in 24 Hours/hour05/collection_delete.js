mongo = new Mongo("localhost");
myDB = mongo.getDB("newDB");
collections = myDB.getCollectionNames();
print("Initial Collections:");
printjson(collections);
collection = myDB.getCollection("newCollectionA");
collection.drop();
print("After Deleting newCollectionA:");
collections = myDB.getCollectionNames();
printjson(collections);
collection = myDB.getCollection("newCollectionB");
collection.drop();
print("After Deleting newCollectionB:");
collections = myDB.getCollectionNames();
printjson(collections);