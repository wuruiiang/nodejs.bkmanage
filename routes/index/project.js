var express=require('express');

var router=new express.Router();

router.get('/',function (req,res) {
    res.send('project page in index');
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