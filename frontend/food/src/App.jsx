
import React from 'react'
import Navbar from './components/Navbar'
import './styles/app.scss'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/Login'
import { CartProvider } from './components/contextReducer'
import Cart from './components/Cart'
import MyOrder from './components/MyOrder'


const App = () => {
  return (
   
   <CartProvider>
    <Router>
     <Navbar />

     
    
   
      <Routes >
        <Route path='/' element={<Home/>} exact/>
        <Route path='/login'  element={<Login/>} exact />
        <Route path='/signin' element={<SignUp/>} exact />
        <Route path='/cart' element={<Cart/>} exact/>
        <Route path='/myorder' element={<MyOrder/>} exact/>
      </Routes>
      
    </Router>

    </CartProvider>
      
 
  )
}

export default App

