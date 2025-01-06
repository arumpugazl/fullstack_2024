// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate=useNavigate();
  
var Login = async(event) => {
    event.preventDefault()
    var req = await axios.post("https://fullstack-2024-6u5w.onrender.com/login", {
        email: email,
        password: password
    })
    console.log(req.data);
    var isLoginSuccessful =req.data.isLoggedIn
    console.log(isLoginSuccessful)
    if(isLoginSuccessful){
        navigate('/Home')
        var message=req.data.message
        console.log(message);
    }
    else{
        alert("Wrong Crdentials");
    }
    
}

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Login}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;