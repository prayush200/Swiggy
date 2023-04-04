
const mongoose=require('mongoose')
const foodItemSchema=mongoose.Schema({


    CategoryName:{
        type:String,
      
  
    },
    name:{
        type:String,
       
      
    },
    img:{type:String},
    options:
        {
            half:{
                type:Number,
              
            },
            full:{
                type:Number,
               
            }
        }
    ,
    description:{type:String}
    
})


module.exports=mongoose.model("foods",foodItemSchema)