var express=require('express');

var _db=require('../../modules/db');

var router=new express.Router();

router.get('/',function (req,res) {
    _db.find('project',{},function (err,data) {
        res.render('project/index',{
            list:data
        });
    })

})

router.get('/add',function (req,res) {
    res.send('add new project');
})

router.get('/edit',function (req,res) {
    res.send('edit the project info');
})

router.get('/delete',function (req,res) {
    res.send('delete a project');
})

module.exports=router;