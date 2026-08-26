import User from '../model/user.js'

const getUser = async (req,res)=>{
  const users = await User.find();
  res.send(users);
}

const addUsers = async (req,res)=>{
  const newUser = {
    fullName:'Prashanna Dongol',
    email:'prashanna@gmail.com',
    password:'prashan@123',
    isAdmin: true
  };
  const users = await User.create(newUser);
  res.send({message:'users added successfully'});
}

const getUserById = async (req,res)=>{
  const {id} = req.params;
  const users = await User.findById(id);

  if(users){
    res.send(users);
  }
  else{
    res.status(404).send({error:'user not found'});
  }
}

export {getUser,addUsers,getUserById};