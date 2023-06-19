import React, { useEffect } from 'react';
import PageTitle from '../coreComponents/pageTitle';
import ActivityLog from '../components/activityLog';

function ActivityLogPage(props){
    const [workouts, setWorkouts] = React.useState([]);

    
    const getWorkoutsFromDB = (event) => {
        const db = event.target.result;
    
        const transaction = db.transaction(["workouts"], "readonly");
        const objectStore = transaction.objectStore("workouts");
    
        const workouts = [];
        objectStore.openCursor().onsuccess = async (event) => {
          const cursor = event.target.result;
          if (cursor) {
            workouts.push(cursor.value);
            cursor.continue();
          } else {
            db.close();
            console.log(workouts);
            setWorkouts(workouts);
          }
        }
    }

    const getWorkouts = () => {
        const requestDBOpen = window.indexedDB.open("fitness-app");
        requestDBOpen.onsuccess = getWorkoutsFromDB;
    }

    useEffect(() =>{
        getWorkouts();
    }, [workouts]);


    return (
        <div>
            <PageTitle pageTitle={"Activity Log"} description={"Your recent progress"}/>
            <ActivityLog activities={workouts} />
            <a href="/createEntry">Log a new activity</a>
        </div>
    );
}

export default ActivityLogPage;