import User from "./models/user.js";
import Product from "./models/products.js";
import Order from "./models/order.js";
import mongoose from "mongoose";

import products from "./data/products.js";
import users from "./data/users.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => console.log(`Connecting to DB at ${conn.connection.host}`))
  .catch((err) => console.log("Error connecting to DB", err.message));

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const addedUsers = await User.insertMany(users);
    const adminId = addedUsers[0]._id;
    const addedProducts = await Product.insertMany(
      products.map((p) => ({ ...p, user: adminId })),
    );

    console.log("Data Imported");
    process.exit(0);
  } catch (err) {
    console.log("Error destroying data", err.message);
    process.exit(1); //1 means error, 0 means success
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data Destroyed");
    process.exit(0);
  } catch (err) {
    console.log("Error destroying data", err.message);
    process.exit(1); //1 means error, 0 means success
  }
};

importData();
