import User from '../models/user.js';
import createToken from '../utils/createToken.js';

const signup = async (req,res)=>{
  const {fullName, email, password, isAdmin} = req.body;
  const user = await User.findOne({email});

  if(user) 
    return res.status(400).send({error:'user already exist'});

  const newUser = await User.create({
    fullName,
    email,
    password,
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

const login = async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});

  if(!user)
    return res.status(404).send({error:"User not registered"});

  if(await user.comparePassword(password)){
    createToken(user._id,res);
    res.send({
      message:"login successful",
      user:{
        fullName: user.fullName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  }
  else{
    res.status(404).send({error:"password not matched"});
  }
}

const logout = async(req,res)=>{
  res.clearCookie('jwt');
  res.send({message:"logout successfult"});
};

const updateUser = async(req,res)=>{
  const {id}=req.params;
  const {fullName,email,password} = req.body;
  const user = await User.findById({_id: id});

  if(!user)
    return res.status(404).send({error:"user not found!"});

  user.fullName = fullName || user.fullName;
  user.email = email || user.email;
  user.password = password || user.password;

  await user.save();
  res.send({message:"user updated sucessfully"});

  console.log(user.fullName);
  console.log(user.email);
}

export {signup,login, logout, updateUser};

//update name email password