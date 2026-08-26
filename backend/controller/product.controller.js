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

const updateProduct = async(req,res)=>{
  const {id} = req.params;
  const {name,price,category,brand,image ,description} = req.body;
  const product = await Product.findById(id);

  if(!product) return res.status(404).send({error: "product not found"});

  product.name = name || product.name;
  product.price = price || product.price;
  product.category = category || product.category;
  product.brand = brand || product.brand;
  product.image = image || product.image;
  product.description = price || product.description;

  await product.save();
  res.send({message:'product updated'});
}

const deleteProduct = async(req,res)=>{
  const {id} = req.params;
  const product = await Product.findById(id);
  if(!product) 
    return res.status(404).send({error:'product no found'});

  await product.deleteOne();
  res.send({error:'product Deleted'});

  // const product = await Product.findByIdAndDelete(id);
}

export {getProducts, addProducts, getProductById, updateProduct, deleteProduct};