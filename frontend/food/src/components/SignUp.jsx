import React, { useState } from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'



const SignUp = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation}));
        const response = await fetch("http://localhost:7000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
            
        });
        
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert('Enter valid credentials')

        }
       
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }


    return (
        <div className='main' id='signupdiv'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input onChange={onChange} type="name" name='name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter name" value={credentials.name} />

                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" onChange={onChange} name='email' value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='form-label'>Password</label>
                    <input type="password" onChange={onChange} name='password' value={credentials.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Address</label>
                    <input type="address" onChange={onChange} name='geolocation' value={credentials.geolocation} className="form-control" id="exampleInputPassword1" placeholder="address" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="m-3 btn btn-primary">Submit</button>
                <Link to='/login' type="submit" className="m-3 btn btn-danger">Already User</Link>
            </form>
        </div>
    )
}

export default SignUp