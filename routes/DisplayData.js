const express=require('express')
const router =express.Router();




router.post('/foodData',(req,res)=>{ 
    res.send([global.foods,global.foodCategory])  
})

module.exports=router