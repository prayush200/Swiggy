const mongoose = require('mongoose')

const dotenv = require('dotenv')
const FoodRoutes = require('../routes/FoodRoutes')
const foods = require('../models/productModel')



const ConnectDatabase =  async() => {
  await mongoose.connect('mongodb://127.0.0.1:27017/food', { useNewUrlParser: true, useUnifiedTopology: true },async(err,result)=>{
    if(err) console.log(err)
    else{
      console.log("connected")
      const fetchData=await mongoose.connection.db.collection("foods");
      fetchData.find({}).toArray(async function(err,data){
        const foodCategory= await mongoose.connection.db.collection("category");
        foodCategory.find({}).toArray(function(err,catData){
          if(err) console.log(err);
          else{
            global.foods=data;
            global.foodCategory=catData;
    
          }
        })
        
      })
    }
  })
 
 
 
  // if(err) console.log(err);
  // else{
  //   global.foods=data;
  //   console.log(global.foods)
  // } 









}
module.exports = ConnectDatabase




