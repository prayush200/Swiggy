import React, { useEffect, useState ,useRef } from 'react'

import '../styles/card.css'

import { useDispatchCart, useCart } from './contextReducer';


const Card = (props) => {
    let data=useCart()
    let dispatch=useDispatchCart()
    let options=props.options;
    let priceOptions= Object.keys(options)
    const[qty,setQty]=useState(1)
    const[size,setSize]=useState("")

  const HandleAddtoCart=async()=>{
    let food=[]
    for(const item of data){
        if(item.id===props.foodItem._id){
        food=item;
        break;
        }
    }
    if(!food.size===[]){
        if(food.size===size){
            await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
            return
        }
        else if (food.size!==size){
            await dispatch({type:"UPDATE",id:props.foodItem._id, price:finalPrice,qty:qty})
            return
        }
        
    }
    await dispatch ({type:"ADD", id:props.foodItem._id, name:props.foodItem.name,price:props.finalPrice,qty:qty ,size:size ,img:props.foodItem.img})
    await console.log(data)
  }
  let finalPrice= qty*parseInt(options[size]);
  global.price=finalPrice

  
  let priceRef=useRef();
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])



    return (
        <div>
            <div className="card" >
                <img src={props.foodItem.img} alt="img" srcSet="" style={{"height":"13rem", "width":"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text"></p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <div className='container w-100'>
                    <select onChange={(e)=>setQty(e.target.value)}>
                        {Array.from(Array(6),(e,i)=>{
                            return(<option key={i+1} value={i+1}> {i+1} </option>)
                        })}
                    </select>
                    </div>
                    <div className="custom-select">
                        <select className='select' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                          {priceOptions.map((data)=>{
                            return <option key={data} value={data} > {data} </option> 
                          })}
                        </select>

                        <button className='btn' onClick={HandleAddtoCart} style={{"border":"2px solid black"}}>
                            Add to Cart
                        </button>
                    </div>
                    <div className='price'>Price : ₹{finalPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
