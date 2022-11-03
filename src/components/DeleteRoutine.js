import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = () => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem('fitness_tracker_JWT')
        deleteRoutine(token, event.target.id)
      }
    return ( 
        <div>
            <button onClick={handleDelete} type="button"> delete </button>
        </div>
     );
}
 
export default DeleteRoutine;