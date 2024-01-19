import { useState } from 'react'
import './SideMenu.css'
import '@mantinex/mantine-logo/styles.css';
import '@mantine/core/styles.css';
import { useMyContext } from "../../hooks/useContext";
import SelectGroup from '../SelectGroup/SelectGroup';
import { Container } from '@mantine/core';
function SideMenu() {
  const [errorMessage] = useState<string>();
  const [activeLink, setActiveLink] = useState('Settings');
  const { exerciseData, selectedExercise, setSelectedExercise } = useMyContext();


  console.log("sideMenu data", exerciseData);


  function setActiveExercise(name: string) {
    setActiveLink(name);
    const exercise = exerciseData.find((exercise) => exercise.name === name);
    if (exercise) {
      setSelectedExercise(exercise);
    }
    console.log("exercise selected", selectedExercise);
  }

  return (
    <nav className="navbar">
      <div className="aside">
        <div className='logo'>
          <SelectGroup />
        </div>


        <Container className='container' size='xl' px='md'>
          <div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>

          {exerciseData &&
            exerciseData.map((link) => (
              <a className='link'
                data-active={activeLink === link.name || undefined}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveExercise(link.name);
                }}
                key={link.name}
              >
                {link.name}
              </a>
            ))}
        </Container>
      </div>
    </nav>
  );
}


export default SideMenu
