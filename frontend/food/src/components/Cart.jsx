import { padding } from '@mui/system'
import React from 'react'
import '../styles/cart.css'
import { useCart, useDispatchCart } from './contextReducer'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom'
import './Card'


const Cart = () => {
    

    let data = useCart();
    let dispatch = useDispatchCart();

    const navigate=useNavigate()


   






    if (data.length === 0) {
        return (
            <div>
                <div><h1 style={{ "paddingTop": "20rem", "textAlign": "center", "fontSize": "larger" }}>Cart is Empty</h1></div>
            </div>
        )
    }

    // const handleLogout=async()=>{
    //     let userEmail=localStorage.getItem("userEmail")
    //     let responses= fetch('http://localhost:7000/api/orderData')
    //     .then((response)=>response.json())
    //     .then((data)=>console.log(data))
    //     .catch((err)=>console.log(err))
    // }

   

   

  
    const handleOut= async () => {
        let userEmail = localStorage.getItem("userEmail")
        let response = await fetch("http://localhost:7000/api/orderData",{
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            
       
              
            body:JSON.stringify({
                order_data: data,
                email:userEmail,
                order_date: new Date().toDateString()
            })
        });
        response = await response.json();
        console.log("Order Response:", response)
        if (response.status === 200) {
            dispatch({type: "DROP"})
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)


    return (

        <div style={{ "paddingTop": "10rem" }} >
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col" ><h4><b style={{"textAlign":"centre"}}>Shopping Cart</b></h4></div>
                                <div className="col align-self-center text-right text-muted"></div>
                            </div>
                        </div>

                      

                 
                        <div className="row border-top border-bottom">  {data.map((food, index) => (
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src={food.img} style={{ "height": "2rem" }} /></div>
                                <div className="col">
                                    <div className="row text-muted">{food.size}</div>
                                    <div className="row">{food.name}</div>
                                </div>
                                <div className="col">
                                    <a href="#"></a><a href="#" className="border">{food.qty}</a><a href="#"></a>
                                    <a href="#"></a><a href="#" className="border"> {global.price}</a><a href="#"></a>
                                </div>
                                <div className="col">  <DeleteIcon style={{ "margin-left": "1rem", "cursor": "pointer", "font-size": "1.5rem" }} className="close" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}  ></DeleteIcon></div>
                            </div>
                        ))}

                        </div>


                        <div className="back-to-shop"><a href="#"></a><Link to='/' className="text-muted">Back to shop</Link></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Summary</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ "padding-left": "0.4rem" }}> TOTAL ITEMS</div>
                            <div className="col text-right">{data.length}</div>
                        </div>

                        <div className="row" style={{ "border-top": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0" }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">{totalPrice}</div>
                        </div>
                        <button className="btn2" onClick={handleOut} >CHECKOUT</button>
                    </div>
                </div>

            </div>
        </div>


      

    )
}


export default Cart