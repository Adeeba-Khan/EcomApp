const express = require('express');
const router = express.Router();
router.get('',(req,res,next)=>{

    res.send("Fetch all products");
});
router.post('',(req,res,next)=>{
    res.send("Add a new product");

});
router.get('/:id',(req,res,next)=>{

    res.send("Fetch a product by its id: ${req.params.id}");
});

module.exports=  router;