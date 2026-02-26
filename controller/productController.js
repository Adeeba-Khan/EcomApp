const path= require(`path`);
let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];


const getProducts =(req,res,next)=>{

    // res.send("Fetch all products");
res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));

}
const postProducts = (req,res,next)=>{
    res.send("Add a new product");

}
const getProductsByID = (req,res,next)=>{

    res.send("Fetch a product by its id: ${req.params.id}");
}
module.exports={getProducts,postProducts,getProductsByID};
