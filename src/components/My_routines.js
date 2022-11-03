import React, { useState, useEffect } from "react";
import { getUser, getUserRoutine } from "../api";
import { CreateNewRoutine, DeleteRoutine} from "./";

const My_routines = () => {
  const [info, setInfo] = useState({});
  const [myRoutines, setMyRoutines] = useState([]);
  const getUserInfo = async () => {
    try {
      const result = await getUser(token);
      console.log(result);
      if (result) {
        console.log('222222');
        setInfo(result);
      }
    } catch (error) {
        console.log('333333');
      console.error(error);
    }
  };

  const getMyRoutines = async () => {
    try {
      if (info && info.username) {
        const result = await getUserRoutine(info.username);
        if (result) {
          setMyRoutines(result);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getMyRoutines();
  }, [info]);

  return (
    <div>
      {info && info.username ? <h2 id="main-ctr">Hello {info.username}!</h2> : null}
      <h3>Welcome to your routines!</h3>

      <CreateNewRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
      {myRoutines && myRoutines.length
        ? myRoutines.map((routine, index) => {
            return (
              <div id="myroutine" key={`profile:${routine.id} ${index}`}>
                <p>Routine: {routine.name}</p>
                <p>Goal: {routine.goal}</p>
                <DeleteRoutine  routineId={routine.id} setMyRoutines={setMyRoutines}/>
              </div>
            );
          })
        : null}
        
    </div>
  );
};

export default My_routines;
