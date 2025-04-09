const express=require("express");
const app=express();
const port=3000;
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Razorpay=require("razorpay")
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:"GET,POST,PUT,DELETE"
}));
app.get("/",(req,res)=>{
    res.send("working");
})

app.post("/payment",async(req,res)=>{
var instance = new Razorpay({ key_id: 'rzp_test_ZkJ3ids4GaOOTU', key_secret:'GqC7CQtP1Myyww5WF5wYZlmW'});
try{
    let {amount}=req.body;
let order=await instance.orders.create({
  amount: amount*100,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "TREATO BOOKING ORDER"
  }
});
    console.log(order);
res.status(201).json({
    success:true,
    order,
    amount
});
}catch(error){
res.status(500).json({
    success:false,
    error
})
}

});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});
