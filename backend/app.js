import express from "express";
import productRoutes from "./routes/product.route.js";
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

app.use("/api/products", productRoutes);

app.listen(3000, () => {
    console.log("Server is up and running");
});