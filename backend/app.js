const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt=require("jsonwebtoken");

const JWT_SECRET="9i8s7ydfah9d8fyha8nf*$%^YGH#"

const mongoUrl = "mongodb+srv://admin:Password1@cluster0.xtozb.mongodb.net/";

mongoose.connect(mongoUrl,{
  useNewUrlParser:true,
}).then(() => {
  console.log("Connected to database");
}).catch((e) => console.log(e));
require("./userDetails.js")
require("./ProductAdd.js")


const User=mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{ //Fukcja rejestruąca użytkownika
  const{username,password} = req.body; //odbiera podane dane przez użytkownika

  const encryptedPassword=await bcrypt.hash(password, 10);
  try{
    const oldUser= await User.findOne({username}); //sprawdza czy podana wartość emailu już jest w bazie danych 

    if(oldUser){
        return res.send({error:"User Exists"});
    }
    await User.create({
      username,
      password:encryptedPassword,
    });
    res.send({status:"ok"}) //Jeżeli dane zostaną pomyślnie wysłane do bazy danych to status będzie ustawiony na ok
  }catch(error){
    res.send({status:"error"}) //Zmieniamy status na error jeżeli wystąpi problem
  }
})
const Product=mongoose.model("Products");
app.post("/ProductAdd",async(req,res)=>{ //Fukcja rejestruąca użytkownika
  const{productname,productprice,productdesc,imageUrl,amount} = req.body; //odbiera podane dane przez użytkownika

  try{
    const exitingproduct= await Product.findOne({productname}); //sprawdza czy podana wartość nazwy użytkownika już jest w bazie danych 

    if(exitingproduct){
        return res.send({error:"User Exists"});
    }
    await Product.create({
      productname,
      productprice,
      productdesc,
      imageUrl,
      amount,
    });
    res.send({status:"ok"}) //Jeżeli dane zostaną pomyślnie wysłane do bazy danych to status będzie ustawiony na ok
  }catch(error){
    res.send({status:"error"}) //Zmieniamy status na error jeżeli wystąpi problem
  }
})

app.post("/ProductGet", async (req, res) => {
  try {
    const products = await Product.find();  // Pobiera wszystkie produkty
    res.send({ status: "ok", products });  // Zwraca produkty
  } catch (error) {
    res.send({ status: "error", error: "Failed to retrieve products" });
  }
});



app.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    
    const user=await User.findOne({username}); //sprawdza czy podane adres email już istnieje
    if(!user){
        return res.send({error:"User not found"});
    }
    if(await bcrypt.compare(password,user.password)){ //porównuje hasło podane z pobranym z bazy danych
        const token=jwt.sign({username:user.username},JWT_SECRET); //przypisuje token użytkownikowi
        if(res.status(201)){ //201 oznacza że oparacja przebiegła pomyślnie
            return res.json({status:"ok",data: token});
        }else{
            return res.json({status:"error"});
        }
    }
    res.json({status:"error", error:"Invalid Password"})
});
app.post("/userData",async(req,res)=>{
    const {token} = req.body;
    try{
        const user=jwt.verify(token,JWT_SECRET);

        
        console.log(user)
        const useremail=user.username;
        User.findOne({username:useremail}).then((data)=>{
            res.send({status:"ok",data:data});
        }).catch((error)=>{
            res.send({status:"error",data:error});
        });
    }catch(error){}
})




app.listen(5000,()=>{//ustalamy port na którym uruchomiony będzie backend
  console.log("Server Started");
})
