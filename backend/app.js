import express from "express";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";

const app = express();

mongoose
    .connect("mongodb://localhost:27017/HCOE")
    .then((conn) => console.log(`connected to db ${conn.connection.host}`))
    .catch((error) => console.log("Error connecting to db",error.message))


app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Server is up and running" });
});

app.use("/api/products", productRouter);
app.use("/api/auth",userRouter);

app.listen(3000, () => {
    console.log("Server is up and running");
});