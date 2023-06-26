import React from 'react';

function ListExercise({ exercises }) {
    const exerciseList = exercises.map((exercise, index) =>
        <li key={index}>{exercise.id + " - " + exercise.name}</li>
    )

    return <ul>{exerciseList}</ul>
}

export default ListExercise;