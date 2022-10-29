import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllRoutines } from '../api';

const Routines = ({allActivities} ) => {
    // const { routines, token} = props
    const [allRoutines, setAllRoutines] = useState([]);
        useEffect(()=> {
            async function fetchRoutines(){
                if(!allRoutines.length){
                    const retrievedRoutines = await getAllRoutines();
                    setAllRoutines(retrievedRoutines);
                }
            }
            fetchRoutines();
        }, []);
    
    const reverseList = allRoutines.slice(0).reverse();
    const displayRoutines = allRoutines.length ? (
      <div className="boxAll">
        {reverseList.map((element, index) => {
          return (
            <div className="border-solid border-2 border-teal-900" key={index}>
              <h1 className="font-bold ml-2 underline underline-offset-4" >Creator:</h1> <p className="ml-2 " >{element.creatorName}</p>
              <h2 className="font-bold ml-2 underline underline-offset-4" >Routine Title:</h2> <p className="ml-2"> {element.name}</p>
              <p className="font-bold ml-2 underline underline-offset-4" >Routine Goal: </p> <p className="ml-2">{element.goal}</p>
              {element.activities.map((activity, index) => (
                <div key={index}>
                  <p className="font-bold ml-2 underline underline-offset-4" >Activity Name:</p> <p className="ml-2">{activity.name}</p>
                  <p className="font-bold ml-2 underline underline-offset-4" > Activity Description:</p> <p className="ml-2">{activity.description}</p>
                  <p className="font-bold ml-2 underline underline-offset-4" > Duration:</p> <p className="ml-2">{activity.duration}</p>
                  <p className="font-bold ml-2 underline underline-offset-4" > Count:</p> <p className="ml-2">{activity.count}</p>
                </div>
              ))}
            </div>
          );}
        )}
      </div>
    ) : (
      <div>Loading Routines...</div>
      
    );
    return(
      <div>
           {displayRoutines}
           <button
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
      style={{
        position: 'fixed',
        padding: '1rem 2rem',
        fontSize: '20px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#AF3800',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '20px'
      }}
    >
      Scroll to top
    </button>
  </div>

    );
}
export default Routines;

    // const tempRoutines = Array.from(routines);
    // const temp2Routines = [...routines];
    // const [filteredRoutines, setFilteredRoutines] =useState(tempRoutines);

//     async function removeRoutine(token, _id) {
//         await deleteRoutine(token, _id).then(()=> {
//             window.location.reload();
//         })
//     }

//     const allRoutines = () => {
//         const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;
//         return (
//             <div id = 'outer div element'
//             {
//                 routinesToDisplay.map((routine)=> {
//                     const { routineName, goal, _id, creatorId=username } = routine;
//                     return (
//                         <div> key=(_id)
//                         <h3>{routineName}</h3>
//                         <p>goal: {goal}</p>
//                         <p>creatorName: {creatorName}</p>
//                         {
//                             isAuthor ? (
//                                 <button><Link to={`/routines/edit-routine/${_id}`}></Link>Edit</button>,
//                                 <button><Link to={`/routines/delete-routine/${_id}`}></Link>Delete</button>
//                                 ) : (
//                                     <Link to={`/routines/${_id}`}></Link>View/Link

//                                 )};\
//                         </div>
//                     )
                    
//                 })
//             }
//             /div>
//         // join routines and activities??
//     }

//     async function getRoutines() {
//         const results = await getAllRoutines( {name, goal, username})
//     }
    
//     async function routineActivity() {
//         const results = await getActivities( {
//             activityName,
//             description,
//             duration,
//             count
//         })
        
//     }

//     return (
//         <div>
//             <div>
//                 <h1>Routines!</h1>
//                 {/* <button>
//                     <Link to='/Activities'>Activities</Link>
//                 </button> */}
//             </div>
//         </div>
//     )
// }