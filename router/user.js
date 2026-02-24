const express = require('express');
const router = express.Router();
router.get('',(req,res,next)=>{

    res.send("Fetch all users");
});
router.post('',(req,res,next)=>{
    res.send("Add a new user");

});
router.get('/:id',(req,res,next)=>{

    res.send("Fetch a user by its id");
});

module.exports=  router;