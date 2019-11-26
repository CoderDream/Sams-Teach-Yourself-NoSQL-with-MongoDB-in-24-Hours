'use strict';

let expect = require('chai').expect;
const {describe} = require("mocha");
let request = require('request');

// 参考：[mocha](https://coderdream.github.io/2019/11/14/mocha/)
// 引入类，暂时ES6标准中有import，但NodeJs还不支持
let MongoDB_Util = require('../../src/util/mongodb_util');

describe('MongoDB_Util 的测试', function () {

    // 在本区块所有测试用例执行之前执行
    before(function () {
        console.log(' # before # \n');
    });

    // 在本区块所有测试用例执行之后执行
    after(function () {
        console.log(' # after # \n');
    });

    // 在本区块每个测试用例之前执行
    beforeEach(function () {
        console.log(' # beforeEach #');
    });

    // 在本区块每个测试用例之后执行
    afterEach(function () {
        console.log(' # afterEach # \n');
    });

    // 创建数据库
    it('createDB', function () {
        console.log("test createDB begin");
        //新建类对象
        // let MongoDB_Util = new MongoDB_Util();
        //调用对象中的方法
        //console.log(point.toString());
        //调用类中的静态函数
        //console.log(Point.sayHello('Ence'));
        MongoDB_Util.createDB().then(function (data) {
            //then第一个函数是成功的回调，参数是resolve(err)中的data
            console.log('成功：' + data); // 若成功，运行结果：成功：111
            expect(data).to.be.equal("数据库已创建!");
        }, function (err) {
            //then第二个函数是失败的回调函数，参数是reject(err)中的err错误对象
            console.log('失败：' + err);
        });
        //调用类中的静态变量
        // console.log(Point.para);

        // const result = await performanceResultService.findPgWorkIds(body, ctx);
        // console.log('###########');
        // console.log(result);
        // expect(数据库已创建!).to.be.equal(result.length);
    });

    // 创建集合
    it('createCollection', function () {
        console.log("test createCollection begin");

        MongoDB_Util.createCollection().then(function (data) {
            //then第一个函数是成功的回调，参数是resolve(err)中的data
            console.log('成功：' + data); // 若成功，运行结果：成功：111
            expect(data).to.be.equal("创建集合!");
        }, function (err) {
            //then第二个函数是失败的回调函数，参数是reject(err)中的err错误对象
            console.log('失败：' + err);
        });

        console.log("test createCollection end");
    });

    // 插入一条数据
    it('insertOne', function () {
        console.log("test insertOne begin");

        MongoDB_Util.insertOne().then(function (data) {
            //then第一个函数是成功的回调，参数是resolve(err)中的data
            console.log('成功：' + data); // 若成功，运行结果：成功：111
            expect(data).to.be.equal("插入一条数据!");
        }, function (err) {
            //then第二个函数是失败的回调函数，参数是reject(err)中的err错误对象
            console.log('失败：' + err);
        });

        console.log("test insertOne end");
    });

    // 插入多条数据
    it('insertMany', function () {
        console.log("test insertMany begin");

        MongoDB_Util.insertMany().then(function (data) {
            //then第一个函数是成功的回调，参数是resolve(err)中的data
            console.log('成功：' + data); // 若成功，运行结果：成功：111
            expect(data).to.be.equal("插入多条数据!");
        }, function (err) {
            //then第二个函数是失败的回调函数，参数是reject(err)中的err错误对象
            console.log('失败：' + err);
        });

        console.log("test insertMany end");
    });

});