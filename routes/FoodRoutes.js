
const express=require('express')

const router=express.Router()

const {getAllFoodItems, CreateFood, updateFoodItems, deleteFoodItems} = require('../controller/FoodController')



//Get
router.route('/foods').get(getAllFoodItems)

//create
router.route('/food').post(CreateFood)

router.route('/food/:id').put(updateFoodItems)

router.route('/food/:id').post(deleteFoodItems)


module.exports= router