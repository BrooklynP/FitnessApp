import React from 'react';
import CreateActivityLogEntry from '../components/createActivityLogEntry';
import PageTitle from '../coreComponents/pageTitle';
import ActivityLog from '../components/activityLog';


function EntryFormPage(props) {
    const [enteredWorkouts, setWorkouts] = React.useState([]);

    const addActivity = (activity) => {
        const requestDBOpen = window.indexedDB.open("fitness-app")

        requestDBOpen.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction(["workouts"], "readwrite");
            const objectStore = transaction.objectStore("workouts");

            objectStore.openCursor().onsuccess = (event) => {
                const request = objectStore.add({ ...activity, dateEntered: (new Date()).toString() });
                setWorkouts([...enteredWorkouts, activity])
                request.onsuccess = (event) => {
                    // event.target.result
                };
                db.close();
            }
        }

    }

    return (
        <div>
            <PageTitle pageTitle={"Log an activity"} description={"How did you do today?"} />
            <CreateActivityLogEntry logEntry={addActivity} />
            <p>Entered Workouts</p>
            <ActivityLog activities={enteredWorkouts} />
        </div>
    );
}

export default EntryFormPage;