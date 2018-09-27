var express=require('express');

var app=new express();

var index=require('./routes/index');
var login=require('./routes/login');

//使用ejs模板引擎，默认找views这个目录
app.set('view engine','ejs');

//配置public目录为我们的静态资源目录
app.use(express.static('public'));

app.use('upload',express.static('upload'));


//引用功能模块
//var user=require('./routes/user.js');

//设置路由中间件
//app.use('/user',user);
app.use('/index',index);
app.use('/login',login);

app.get('/',function (req,res) {
    res.send('hello,NodeJs!');
})


app.listen(3005,'127.0.0.1');