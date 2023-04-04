
const express=require("express")

//Routes

const  UserRoutes=require('./routes/UserRoutes')
const DisplayData=require('./routes/DisplayData')
const FoodRoutes=require('./routes/FoodRoutes')
const OrderData=require('./routes/OrderRoutes')
const app=express();

const path=require('path')

 // prayushfooddeliveryapp.netlify.app

app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","https://prayushfooddeliveryapp.netlify.app");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/api',UserRoutes)

app.use('/api',DisplayData)

app.use('/api',FoodRoutes)

app.use('/api',OrderData)



//STATIC FILES

app.use(express.static(path.join(__dirname,'../frontend/food/build')))






module.exports=app
