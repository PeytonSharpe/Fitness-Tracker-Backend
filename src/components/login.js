import React, { useState } from 'react';
import { loginUser } from '../api';
import { Link } from 'react-router-dom';
import { navigate } from 'react-router-dom';


const Login = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const result = await registerUser(username, password);
        if (result.success) {
            setToken(result.data.token);
            window.localStorage.setItem('token', result.data.token);
            navigate('/profile');
        } else {
            console.log(result.error.message)
        }
    }
    return (
        <div>
            <h2>Welcome Back!  Please Login</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <input
                    type='text'
                    placeholder='Enter Username'
                    onChange={(event) => setUsername(event.target.value)} />
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(event) => setPassword(event.target.value)} />
                <button type='submit'><Link to='/profile'>Submit</Link></button>
                
            </form>
        </div>
    )
}

export default Login;