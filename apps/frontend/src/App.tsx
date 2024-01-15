import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Exercise } from './types/types';
import ExerciseCard from './components/ExcerciseCard';

function App() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [exercises, setExercises] = useState<Exercise[]>();

  useEffect(() => {
    fetch('http://localhost:3000/api/exercises')
      .then(async (response) => {
        const payload = await response.json();
        if (response.ok) {
          console.log('payload', payload.exercises.exercises);
          setExercises(payload.exercises.exercises);
          console.log('exercises', exercises);
        } else {
          setErrorMessage(payload.message);
        }
      })
      .catch((_networkError) => {
        setErrorMessage('Network error');
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Exercises returned from server</h1>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      <ul>
        {exercises &&
          exercises?.map((exc, index) => {
            return <ExerciseCard name={exc.name} duration={10} key={index}></ExerciseCard>;
          })}
      </ul>
    </div>
  );
};


export default App
