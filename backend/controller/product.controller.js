import Product from "../model/products.js";

const getProducts = async (req,res)=>{
  const products = await Product.find();
  res.send(products);
}

const addProducts = async (req,res)=>{
  const newProduct = {
    name: 'Sample Name',
    price: 10,
    description: 'Sample Description',
    brand: 'Sample Brand',
    category:'sample Category'
  };
  const product = await Product.create(newProduct);
  res.send({message:"Products added successfully"});
}

const getProductById =async (req,res)=>{
  const {id} = req.params;
  const product = await Product.findById(id);

  if(product){
    res.send(product);
  }
  else{
    res.status(404).send({error: "product not found"});
  }
}

export {getProducts, addProducts, getProductById};