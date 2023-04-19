import React from 'react';
import CreateActivityLogEntry from '../components/createActivityLogEntry';
import PageTitle from '../coreComponents/pageTitle';


function EntryFormPage(props){
    const [activityLog] = React.useState(JSON.parse(localStorage.getItem("activities")) || []);

    const addActivityLog = (activityDesc) => {
        activityLog.push(activityDesc);
        localStorage.setItem("activities", JSON.stringify(activityLog));
    }

    return (
        <div>
            <PageTitle pageTitle={"Log an activity"} description={"How did you do today?"}/>
            <CreateActivityLogEntry logEntry={addActivityLog} />
        </div>
    );
}

export default EntryFormPage;