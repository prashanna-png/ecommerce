import User from '../model/user.js';
import bcrypt from 'bcrypt';

const signup = async (req,res)=>{
  const {fullName, email, password,isAdmin} = req.body;
  const user = await User.findOne({email});

  if(user) 
    return res.status(400).send({error:'user already exist'});

  const hashPassword = await bcrypt.hash(password,10);

  const newUser = await User.create({
    fullName,
    email,
    password: hashPassword,
    isAdmin});

  res.send({
    message:'User create',
    user:{
      fullName: newUser.fullName,
      email: newUser.email,
      isAdmin: newUser.isAdmin,      
    }
  });
}

export {signup};