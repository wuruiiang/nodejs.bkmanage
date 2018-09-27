var MongoClient=require('mongodb').MongoClient;

//数据库连接字符串
var DbUrl='mongodb://127.0.0.1:27017';

var _DBName='db_project';

var ObjectID=require('mongodb').ObjectID;

//连接数据库
function __connectDB(callback) {
    MongoClient.connect(DbUrl,{useNewUrlParser:true},function (err,client) {
        if(err){
            console.log(err);
            return;
        }

        //执行回调函数

        callback(client);
    })
}

//MongoDB自增ID

exports.ObjectID=ObjectID;

//查询
exports.find=function (_tablename,_json,callback) {
    __connectDB(function (client) {
        const db=client.db(_DBName);

        var result=db.collection('user').find(_json);

        result.toArray(function (error,data) {
            //关闭数据库
            client.close();
            //执行回调函数
            callback(error,data);
        })
    })
}

//添加
exports.insert=function (_tablename,_json,callback) {
    __connectDB(function (client) {
        const db=client.db(_DBName);
        var result=db.collection(_tablename).insertOne(_json,function (error,data) {
            //关闭数据库
            client.close();
            //执行回调函数
            callback(error,data);
        });
    })
}

//修改
exports.update=function (_tablename,_value,_json,callback) {
    __connectDB(function (client) {
        const db=client.db(_DBName);
        var result=db.collection(_tablename).updateOne(_value,{$set:_json},function (error,data) {
            //关闭数据库
            client.close();
            //执行回调函数
            callback(error,data);
        });
    })
}

//删除
exports.delete=function (_tablename,_json,callback) {
    __connectDB(function (client) {
        const db=client.db(_DBName);
        var result=db.collection(_tablename).deleteOne(_json,function (error,data) {
            //关闭数据库
            client.close();
            //执行回调函数
            callback(error,data);
        });
    })
}

