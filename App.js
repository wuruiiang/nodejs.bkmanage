var express=require('express');

var session=require('express-session');

var app=new express();

var index=require('./routes/index');
var login=require('./routes/login');

//设置session中间件
app.use(session({
    name:'bk_manager_session_id',
    secret: 'bk_manager session key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:1000*60*30
    },
    rolling:true
}));

//使用ejs模板引擎，默认找views这个目录
app.set('view engine','ejs');

//配置public目录为我们的静态资源目录
app.use(express.static('public'));

app.use('upload',express.static('upload'));


//引用功能模块
//var user=require('./routes/user.js');

//设置统一跳转(设置自定义中间件)
app.use(function (req,res,next) {
    if(req.url=='/login'||req.url=='/login/doLogin'){
        next();
    }
    else{
        if(req.session.userinfo&&req.session.userinfo.username!=''){
            app.locals['userinfo']=req.session.userinfo;
            next();
        }else{
            res.redirect('/login');
        }
    }
})

//设置路由中间件
//app.use('/user',user);
app.use('/index',index);
app.use('/login',login);



app.listen(3005,'127.0.0.1');