import React from 'react'
import '../styles/navbar.css'
import Cart from './Cart'
import { Link ,useNavigate } from 'react-router-dom'
import ig from '../download.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from './contextReducer'
import { color } from '@mui/system'
const Navbar = () => {
  const navigate=useNavigate();

  const HandleLogout=()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  let data=useCart()



  return (

    <div>
      {/* <nav>
        <h1><img src={ig} alt="err" /></h1>

        <main>
          <Link to='/'>Home</Link>
          <Link to='/cart' ><ShoppingCartIcon /> <sup>0</sup></Link>
          <Link to='/login' >Login
          </Link>
          <Link to='/signin'>SignIn</Link>

         <div className='search'>
          <label for="site-search" placeholder='search'></label>
          <input type="search" id="site-search" name="q" placeholder='search'/>
          <button><SearchIcon/></button>
        </div>


        </main>
      </nav> */}

      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <Link to='/'> <li className='li'>Home</li></Link>
            <Link  to='/myorder' className='li'><li>MyOrder</li></Link>
            
            {(localStorage.getItem("authToken"))? <Link to='/cart'>  <li className='li'><ShoppingCartIcon>

              </ShoppingCartIcon> <sup style={{"color":"goldenrod" ,"fontWeight":"bolder"}}>{data.length}</sup></li></Link>:""}
          
            {(!localStorage.getItem("authToken"))?      <div className='d-flex'>
            <Link to='/login'>  <li className='li'>LogIn</li> </Link>
            <Link to='/signin'> <li className='li'>SignIn</li></Link>   
            </div>
           :
             <button  >
              
               <li className='li' onClick={HandleLogout}>LogOut</li> 
             </button>}
           
      

          </ul>
          <h1 className="logo">Zwiggato
          </h1>
        
        </div>
       
      </nav>
    </div>





  )
}

export default Navbar