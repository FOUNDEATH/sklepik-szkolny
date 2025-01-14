const mongoose = require("mongoose");

const ProductAddSchema = new mongoose.Schema( //szablon użytkownika
    {
    productname: {type:String,unique:true}, 
    password: String,
    productprice: String,
    productdesc: String,
    imageUrl: String,
    amount: String
    },
    {  
    collection: "Products",  
    }
);

mongoose.model("Products",ProductAddSchema);
