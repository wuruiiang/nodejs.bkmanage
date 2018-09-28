var express=require('express');

var bodyParser=require('body-parser');

var md5=require('md5');

var _db=require('../modules/db');

var router=new express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.use(bodyParser.json());

//登录界面
router.get('/',function (req,res) {
    res.render('login');
})

router.post('/doLogin',function (req,res) {
    //获取Post提交的数据
    let username=req.body.username;
    let password=md5(req.body.password);
    // let password=req.body.password;

    //开始数据验证
    _db.find('user',{
        username,
        password
    },function (err,data) {
        if(err){
            console.log(err);
            res.send('数据库连接错误');
        }
        if(data.length>0){
            console.log('登录成功');
            console.log(data);
            //保存用户信息
            req.session.userinfo=data[0];
            res.redirect('/index');
        }else{
            res.send("<script>alert('登录失败');location.href='/login'</script>");
        }
    })
})

router.post('/loginOut',function (req,res) {
    //销毁session
    req.session.destroy(function (err) {
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/login');
        }
    })
})

module.exports=router;