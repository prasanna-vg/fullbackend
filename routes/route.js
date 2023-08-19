var express = require('express');
var route = express.Router();
var Namelist = require('../models/namelist')

route.get('/names',(req,res,next)=>{
    Namelist.find(function(err, namelist){
        res.json(namelist);
    })
});

route.post('/name',(req,res,next)=>{
    let newName = Namelist({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    newName.save((err, namelist)=>{
        if(err){
            res.json({msg:'Could not add name'});
            console.log(err);
        }else{
            res.json({msg:'Added data successfully!'});
        }
    })
})

route.delete('/name/:_id',(req,res,next)=>{
    Namelist.deleteOne({_id:req.params._id},(err,result)=>{
        if(err){
            res.json(err);
            console.log(err);
        }else{
            res.json(result);
            console.log(result);
        }
    })
})
module.exports = route;