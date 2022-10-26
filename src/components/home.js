import React from 'react';
import { loginUser } from '../api';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to FitnessTrackr!</h1>
            <button>
                <Link to='/login'>Login</Link>
            </button><br></br>
            <h3> New to FitnessTrackr?</h3>
            <button>
                <Link to='/register'>Register here!</Link><br></br>
            </button>
        </div>
    )
}

export default Home;