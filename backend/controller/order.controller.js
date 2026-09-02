import Order from "../models/order.js";

const addOrder = async (req, res) => {
  const {
    orderedItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  const newOrder = {
    user: req.user._id,
    orderedItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
  const order = await Order.create(newOrder);
  if (!order) {
    return res.status(201).send({ error: "order not created" });
  }
  res.send({ message: "order created succesfully", orderId: order._id });
};

const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "fullName email");
  if (!orders) {
    return res.status(404).send({ error: "no orders found" });
  }
  res.send(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById({_id: id });
  if (!order) {
    return res.status(404).send({ error: "order not found" });
  }
  res.send(order);
};

const getMyOrders = async (req,res)=>{
  const orders = await Order.find({user: req.user._id});
  if(!orders){
    return res.status(404).send({error:"no orders found"});
  }
  res.send(orders);
}

export { addOrder, getOrders, getOrderById ,getMyOrders};
