import products from "../model/products.js";

const getProducts = (req,res)=>{
  res.send(products);
}

const addProducts = (req,res)=>{
  const data = req.body;
  products.push(data);
  res.send({message: "products added sucesssfully"});
}

const getProductById = (req,res)=>{
  const { id } = req.params;
  const product = products.find((product)=> product.id == id);
  if(product){
    res.send(product)
  }
  else{
    res.statusCode(404).send({error:"product not found"});
  }
  console.log(product.id);
}

export {getProducts, addProducts, getProductById};