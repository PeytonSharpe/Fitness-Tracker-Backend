import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getActivities, getRoutines, getRoutinesByUser } from "../api";
import { useState, useEffect } from 'react';


const myRoutinesList = (props) => {
    const { routineId } =useParams();
    const { setRoutines, setActivities } = props;
    const [myRoutines, setMyRoutines] = useState([]);
    useEffect(async () => {
        const activities = await getActivities();
        attachActivities(activities);
        const routines = await getRoutines();
        setRoutines(routines);
        const myRoutines = await getRoutinesByUser();
        setMyRoutines(myRoutines);
    }, [])
    return (
        <div id="myRoutinesPage">
            <h1 id="myRoutinesPageTitle">MY ROUTINES</h1>
            <Link to='/createNewRoutine'>
                <button id='newRoutineButton'>Create New Routine</button>
            </Link>
            <div id='routinesList'>
                {myRoutines.map(routine =>
                    <div className='routines' key={routine.id}>
                        <Link to={`/editRoutine/${routine.id}`}>
                            <button id='editButton'>Edit Routine</button>
                        </Link>
                        <Link to={`/addActivity/${routine.id}`}>
                            <button id='addActivityButton'>Add Activity</button>
                        </Link>
                        <h3 id='routineName'>{`Routine: ${routine.name}`}</h3>
                        <p>{`Goal: ${routine.goal}`}</p>
                        <p>{`Creator: ${routine.creatorName}`}</p>
                        <h4>Activities:</h4>
                        {routine.activities.map(activity =>
                            <div className='routine_activitie' key={activity.id}>
                                <Link to={`/editActivity/${routine.id}/${activity.id}`}>
                                    <button id='editActivityButton'>Edit Activity</button>
                                </Link>
                                <p>{`Name: ${activity.name}`}</p>
                                <p>{`Description: ${activity.description}`}</p>
                                <p>{`Duration: ${activity.duration}`}</p>
                                <p>{`Count: ${activity.count}`}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default myRoutinesList;