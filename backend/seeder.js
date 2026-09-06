import User from './models/user.js';
import Product from './models/products.js';
import Order from './models/order.js';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => console.log(`Connecting to DB at ${conn.connection.host}`))
  .catch((err) => console.log("Error connecting to DB", err.message));

  const destroyData = async ()=>{
    try{
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();
      console.log("Data Destroyed");
      process.exit(0);
    }catch(err){
      console.log("Error destroying data", err.message);
      process.exit(1); //1 means error, 0 means success
    };
  };

  destroyData();