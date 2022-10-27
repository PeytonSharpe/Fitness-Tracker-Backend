import React from 'react';
import { Link } from 'react-router-dom';

const Activities = ({ user, username }) => {
    const messages = user.messages;
    const userID = user._id;

    return (
        <div>
            <div>
                <h1>Welcome {`${username}`}!</h1>
                <h2>Create a new routine</h2>
                <button>
                    <Link to='/Myroutine/create-routine'>Add Routine</Link>
                </button>
            </div>
        </div>
    )
}
export default Activities;
