import React, { useState } from 'react';
import { loginUser } from '../api';
import { Link } from 'react-router-dom';
// import { navigate } from 'react-router-dom';


const Login = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await loginUser(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/routines');
        } else {
            console.log(results.error.message)
        }
    }
    return (
        <div>
            <h2>Please login so we can get trackin'!</h2>
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
                <button type='submit'><Link to='/routines'>Submit</Link></button>
                
            </form>
        </div>
    )
}

export default Login;