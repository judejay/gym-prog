import { useEffect, useState } from 'react'
import './App.css'
import { Exercise } from './types/types';
import { MantineLogo } from '@mantinex/mantine-logo';
import '@mantinex/mantine-logo/styles.css';
import '@mantine/core/styles.css';

function App() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [exercises, setExercises] = useState<Exercise[]>();
  const [activeLink, setActiveLink] = useState('Settings');

  useEffect(() => {
    fetch('http://localhost:3000/api/exercises')
      .then(async (response) => {
        const payload = await response.json();
        if (response.ok) {
          console.log('response', response);
          //  console.log('payload', payload.exercises.exercises);
          setExercises(payload.exercises.exercises);
          //console.log('exercises', exercises);
        } else {
          setErrorMessage(payload.message);
        }
      })
      .catch(() => {
        setErrorMessage('Network error');
      });
  }, []);



  return (
    <nav className="navbar">
      <div className="aside">
        <div className="logo">
          <MantineLogo type="mark" size={30} /> {/* Use the MantineLogo component */}
        </div>



        <div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        {exercises &&
          exercises.map((link) => (
            <a className='link'
              data-active={activeLink === link.name || undefined}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setActiveLink(link.name);
              }}
              key={link.name}
            >
              {link.name}
            </a>
          ))}

      </div>
    </nav>
  );
}


export default App
