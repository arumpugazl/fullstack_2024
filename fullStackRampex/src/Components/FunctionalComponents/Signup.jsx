// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Signup() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var navigate=useNavigate();

    //   const handleSignup = (e) => {
    //     e.preventDefault();
    //     console.log('Name:', name);
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };
    var signup = async(event) => {
        event.preventDefault()
        var req = await axios.post("https://fullstack-2024-6u5w.onrender.com/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        console.log(req);
        navigate('/login')
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={signup}>
                <div>
                    <label>FirstName:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                    />
                </div><br></br>
                <div>
                    <label>LastName:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        required
                    />
                </div><br></br>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div><br></br>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div><br></br>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;