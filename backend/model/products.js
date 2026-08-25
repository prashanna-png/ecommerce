import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  description:{
    type:String
  },
  price:{
    type: Number,
    required: true
  },
  brand:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    default:0
  },
  numReviews:{
    type: String,
    default:0
  },
  image:{
    type:String,
    default: "/images/sample.jpg",
  },
  countInStock:{
    type:Number,
    default:0
  },
},
{timestamps:true}
);

const Product = mongoose.model("Product",productSchema);

export default Product;