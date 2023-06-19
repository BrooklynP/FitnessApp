import React from 'react';
import CreateActivityLogEntry from '../components/createActivityLogEntry';
import PageTitle from '../coreComponents/pageTitle';


function EntryFormPage(props) {
    const [activityLog] = React.useState(JSON.parse(localStorage.getItem("activities")) || []);

    const addActivity = (activityDesc) => {
        const requestDBOpen = window.indexedDB.open("fitness-app")

        requestDBOpen.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction(["workouts"], "readwrite");
            const objectStore = transaction.objectStore("workouts");

            objectStore.openCursor().onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                } else {
                    const request = objectStore.add({ activityDesc });
                    request.onsuccess = (event) => {
                        // event.target.result
                    };
                    db.close();
                }
            }

        }
    }

    const addActivityLog = (activityDesc) => {
        activityLog.push(activityDesc);
        localStorage.setItem("activities", JSON.stringify(activityLog));
    }

    return (
        <div>
            <PageTitle pageTitle={"Log an activity"} description={"How did you do today?"} />
            <CreateActivityLogEntry logEntry={addActivity} />
        </div>
    );
}

export default EntryFormPage;