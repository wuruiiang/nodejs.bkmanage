var express=require('express');

var router=express.Router();

var project=require('./index/project');

router.use('/project',project);


router.get('/',function (req,res) {
    res.redirect('/index/project');
})


module.exports=router;