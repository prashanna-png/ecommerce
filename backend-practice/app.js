import express from 'express';
import userRoute from './routes/user.route.js';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect("mongodb://localhost:27017/users")
  .then((conn) => console.log(`connected to db ${conn.connection.host}`))
  .catch((error) => console.log("error connecting to database"));

app.use(express.json());

app.get("/",(req,res)=>{
  res.send({message:'server is up and running'});
});

app.use("/api/users",userRoute)

app.listen(3000,()=>{
  console.log("Server is up and running");
});

