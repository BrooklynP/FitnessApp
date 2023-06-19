import React from 'react';

function ActivityLog({ activities }) {
    const activityLogList = activities.map((activityLogItem, index) =>
        <li key={index}>{activityLogItem.exercise + " x " + activityLogItem.weight + "kg x " + activityLogItem.reps}</li>
    )

    return <ul>{activityLogList}</ul>
}

export default ActivityLog;