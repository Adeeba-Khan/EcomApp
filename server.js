const express = require('express');
const app = express();

const cartRouter = require('./router/cart');
const productRouter = require('./router/product');
const userRouter = require('./router/user');

app.use('/carts', cartRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
