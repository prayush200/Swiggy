
const Food=require('../models/productModel')

exports.CreateFood=async(req,res,next)=>{
    const foods= await Food.create(req.body);
    res.status(201).json({
        success:true,
        foods
    })
}

exports.getAllFoodItems=async(req,res,next)=>{
    const foods= await Food.find();
    res.status(200).json({
        success:true,
        foods
    })
}

exports.getSingleFoodItem=async(req,res,next)=>{
    const food = await Food.findById(req.params.id);
    if(!food){
        console.log(`Item not found`);
    }else{
        res.status(200).json({
            success:true,
            food
        })
    }
}

exports.updateFoodItems= async(req,res,next)=>{
    let food= Food.findById(req.params.id);

    if(!food){
        return res.status(500).json({
            success:false,
            message:"Food item did not found "
        })
    }
        food= await Food.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
        res.status(200).json({
            success:true,
            food

        })
    
}

exports.deleteFoodItems= async(req,res,next)=>{
    let food = await Food.findById(req.params.id) 
    if(!food){
        return res.status(500).json({
            success:false,
            message:"Food item did not found "
        })
    }
    food = await Food.remove();
    res.status(200).json({
        success:true,
        message:"deleted sucessfully",
        
    })
    
  

}