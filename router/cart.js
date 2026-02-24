const express = require('express');
const router = express.Router();
router.get('/:userid',(req,res,next)=>{

    res.send("Fetch the cart items for a specific user ${req.params.userid}");
});
router.post('/:userid',(req,res,next)=>{
    res.send("Add a product to the user's cart ${req.params.userid}");

});

module.exports=  router;