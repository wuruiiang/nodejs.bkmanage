var express=require('express');

var md5=require('md5');

var _db=require('../modules/db');

var router=new express.Router();

//登录界面
router.get('/',function (req,res) {
    res.render('login');
})

router.post('/doLogin',function (req,res) {
    console.log('dologin');
    _db.find('user',{},function (err,data) {
        if(err){
            console.log(err);
            res.send('数据库连接错误');
        }
        console.log(md5('123456'));
        console.log(data);
        res.send(data);
    })
})

router.post('/loginOut',function (req,res) {
    res.send('the method of login out');
})

module.exports=router;