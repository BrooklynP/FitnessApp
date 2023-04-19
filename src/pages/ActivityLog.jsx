import React from 'react';
import PageTitle from '../coreComponents/pageTitle';
import ActivityLog from '../components/activityLog';

function ActivityLogPage(props){
    const [activityLog] = React.useState(JSON.parse(localStorage.getItem("activities")) || []);
    
    return (
        <div>
            <PageTitle pageTitle={"Activity Log"} description={"Your recent progress"}/>
            <ActivityLog activities={activityLog} />
            <a href="/createEntry">Log a new activity</a>
        </div>
    );
}

export default ActivityLogPage;