import express from "express";
import projectRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";
import logger from "./middleware/logger.js";
import cookieParser from "cookie-parser";
import orderRouter from './routes/order.route.js'

const app = express();

mongoose.connect("mongodb://localhost:27017/HimalayaShop")
.then((conn) => console.log(`Connecting to DB at ${conn.connection.host}`))
.catch((err) => console.log("Error connecting to DB", err.message));



app.use(express.json()); //conversion into js notation else returns undefined

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);


app.get("/", (req, res) => {
    res.send({message: "Server is up and running"});
});

app.use("/api/products", projectRouter);

app.use("/api/auth", userRouter);

app.use("/api/orders",orderRouter);

app.listen(3000, () => {
    console.log("Server is up and running");
    
});