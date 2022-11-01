import React, { useState } from 'react';
import { createRoutine } from '../api';
import { useParams } from 'react-router-dom';


const createNewRoutine = ({ token, fetchRoutines, navigate }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const { routineId} = useParams();
    
    async function addRoutine() {
    const newRoutine = {
        name,
        goal,
        _id: routineId
    }

    const results = await createRoutine(token, newRoutine)
    fetchRoutines();
    navigate(`/routines`)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addRoutine();
        }}>
            <label>Enter routine name</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setName(event.target.value)} />
            <br></br>
            <label>Enter goal </label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setGoal(event.target.value)} />
            <br></br>
            <button type='submit'>Submit New Post</button>
        </form>
    )
}

export default createNewRoutine;