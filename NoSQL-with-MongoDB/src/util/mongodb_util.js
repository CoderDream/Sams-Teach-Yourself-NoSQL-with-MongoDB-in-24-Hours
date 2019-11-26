let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/runoob";

// [NodeJs中类定义及类使用](https://www.cnblogs.com/eczhou/p/7860616.html)
// 定义类
class MongoDB_Util {

    // //构造函数
    // constructor(x, y) {
    //     this.x = x;//类中变量
    //     this.y = y;
    // }
    // //类中函数
    // toString() {
    //     return '(' + this.x + ', ' + this.y + ')';
    // }
    // //静态函数
    // static sayHello(name){
    //     //修改静态变量
    //     this.para = name;
    //     return 'Hello, ' + name;
    // }


    // 创建数据库（异步方式）
    static createDB() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
                if (err) {
                    reject(err);
                } else {
                    // resolve(db);
                    resolve("数据库已创建!");
                    db.close();
                }
                console.log("数据库已创建!");
            });
        });
    }

    // 创建集合
    static createCollection() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
                if (err) {
                    reject(err);
                } else {
                    let dbase = db.db("runoob");
                    dbase.createCollection('site', function (err, res) {
                        if (err)  {
                            reject(err);
                        } else {
                            // resolve(db);
                            resolve("创建集合!");
                            db.close();
                        }
                    });
                }
                console.log("创建集合!");
            });
        });
    }

    // 插入一条数据
    static insertOne() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
                if (err) {
                    reject(err);
                } else {
                    let dbo = db.db("runoob");
                    let myobj = {name: "菜鸟教程", url: "www.runoob"};
                    dbo.collection("site").insertOne(myobj, function (err, res) {
                        if (err)  {
                            reject(err);
                        } else {
                            // resolve(res);
                            resolve("插入一条数据!");
                            db.close();
                        }
                    });
                }
                console.log("插入一条数据!");
            });
        });
    }

    // 插入多条数据
    static insertMany() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
                if (err) {
                    reject(err);
                } else {
                    let dbo = db.db("runoob");
                    let myobj = [
                        {name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
                        {name: 'Google', url: 'https://www.google.com', type: 'en'},
                        {name: 'Facebook', url: 'https://www.google.com', type: 'en'}
                    ];
                    dbo.collection("site").insertMany(myobj, function (err, res) {
                        if (err)  {
                            reject(err);
                        } else {
                            // resolve(res);
                            console.log("插入的文档数量为: " + res.insertedCount);
                            resolve("插入多条数据!");
                            db.close();
                        }
                    });
                }
                console.log("插入多条数据!");
            });
        });
    }
}

//静态变量
// Point.para = 'Allen';
module.exports = MongoDB_Util;