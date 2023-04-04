import React,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import '../styles/login.css'


const Login = () => {
  let navigate=useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    const response = await fetch("http://localhost:7000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });

    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert('Enter valid credentials')
    }
    if (json.success) {
      localStorage.setItem("UserEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/");
     

    }
 

  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='main' id='logindiv'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" onChange={onChange} name='email' value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className='form-label'>Password</label>
          <input type="password" onChange={onChange} name='password' value={credentials.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="m-3 btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login