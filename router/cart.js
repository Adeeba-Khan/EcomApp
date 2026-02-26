const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
router.get('/:userid',cartController.getCartForUse);
router.post('/:userid',cartController.addProductToCart);

module.exports=  router;