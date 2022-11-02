import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import './style.css';
import {
    Activities,
    Home,
    Login,
    My_routines,
    Navbar,
    Profile,
    Register,
    Routines,
    CreateNewRoutine,
    } from './components';

import {
    getRoutines,
    getUserDetails
} from './api';


const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [routines, setRoutines] = useState([]);
    
    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token');
        setToken('');
        setUser({});
    }

    async function fetchRoutines() {
        const results = await getRoutines()
        setRoutines(results.data);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');

        if (!token) {
            if (storedToken) {
                setToken(storedToken);
            }
            return;
        }

        const results = await getUserDetails(token)
        console.log(results)
        if (results.success) {
            setUser(results.data);
        } else {
            console.log(results.error.message);
        }
    }

    
 
    return (
        <div>
            <Navbar logout={logout} token={token} />
            <Routes>
                <Route
                    path='/'
                    element={<Home 
                    />}
                />
                 <Route
                    path='/routines'
                    element={<Routines
                        token={token}
                        routines={Routines}
                        fetchRoutines={fetchRoutines}
                    />} 
                />
                 <Route
                    path='/activities'
                    element={<Activities
                        token={token}
                        activities={Activities}
                    />} 
                />
                <Route
                    path='/My_routines'
                    element={<Routines
                        token={token}
                        My_routines={My_routines}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines}
                    />}
                />
                <Route
                    path='/CreateNewRoutine'
                    element={<createNewRoutine
                        token={token}
                        createNewRoutine={CreateNewRoutine}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines}
                    />}
                />
                 <Route
                    path='/profile'
                    element={<Profile 
                        user={user}
                        token={token}
                    />}
                />
                 <Route
                    path='/register'
                    element={<Register
                        setToken={setToken}
                        token={token}
                        navigate={navigate}
                    />}
                />
                 <Route
                    path='/login'
                    element={<Login
                        setToken={setToken}
                        navigate={navigate}
                    />} 
                />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);