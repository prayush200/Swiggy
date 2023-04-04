
const app=require('./app')
const express=require('express')
const path=require('path')
const dotenv=require('dotenv')
const ConnectDatabase = require('./config/database')

const bodyParser=require('body-parser')

ConnectDatabase()

//config
app.use(express.json())
dotenv.config({path:"./config/config.env"})

app.use(bodyParser.urlencoded({extended:false}))


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port ${process.env.PORT}`);
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../frontend/food/build/index.html'))
})

app.get('/new',(req,res)=>{
    res.send(`Hello`)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/food/build"))
}