import React, { useEffect } from 'react';
import PageTitle from '../coreComponents/pageTitle';
import CreateExercise from '../components/createExercise';
import ListExercise from '../components/listExercise';

function ExerciseListPage(props){
    const [exercises, setExercises] = React.useState([]);
    const maxExercises = 10;

    const getExercisesFromDB = (event) => {
        const db = event.target.result;
    
        const transaction = db.transaction(["exercises"], "readonly");
        const objectStore = transaction.objectStore("exercises");
        
        const exercises = [];
        objectStore.openCursor().onsuccess = async (event) => {
          const cursor = event.target.result;
          if (cursor && exercises.length < maxExercises) {
            exercises.push(cursor.value);
            cursor.continue();
          } else {
            db.close();
            setExercises(exercises);
          }
        }
    }

    const getExercises = () => {
        const requestDBOpen = window.indexedDB.open("fitness-app");
        requestDBOpen.onsuccess = getExercisesFromDB;
    }

    useEffect(() =>{
        getExercises();
    }, [exercises]);

    const addExercise = (exercise) => {
        const requestDBOpen = window.indexedDB.open("fitness-app")

        requestDBOpen.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction(["exercises"], "readwrite");
            const objectStore = transaction.objectStore("exercises");

            objectStore.openCursor().onsuccess = (event) => {
                const request = objectStore.add(exercise);
                setExercises([...exercises, exercise])
                request.onsuccess = (event) => {
                    // event.target.result
                };
                db.close();
            }
        }
    }

    return (
        <div>
            <PageTitle pageTitle={"Exercise List"} description={"Add a new exercise"}/>
            <CreateExercise logEntry={addExercise}/>
            <p>Exercises</p>
            <ListExercise exercises={exercises}></ListExercise>
        </div>
    );
}

export default ExerciseListPage;