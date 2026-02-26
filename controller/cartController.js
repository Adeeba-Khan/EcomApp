let carts = {
    1: [{ productId: 1, quantity: 2 }],
    2: [{ productId: 2, quantity: 1 }]
};

const getCartForUse= (req,res,next)=>{
const userId = req.params.userid;
    // res.send(`Fetch the cart items for a specific user ${req.params.userid}`);
    if (!carts[userId]) {
        return res.status(404).json({
            message: "Cart not found for this user"
        });
    }

    res.status(200).json({
        userId: userId,
        cartItems: carts[userId]
    });

}

const addProductToCart= (req,res,next)=>{
    res.send(`Add a product to the user's cart ${req.params.userid}`);

     
};
module.exports = {getCartForUse,addProductToCart};