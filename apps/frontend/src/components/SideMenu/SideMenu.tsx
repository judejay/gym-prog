import { useState } from 'react'
import './SideMenu.css'
import '@mantinex/mantine-logo/styles.css';
import '@mantine/core/styles.css';
import { useMyContext } from "../../hooks/useContext";
import SelectGroup from '../SelectGroup/SelectGroup';
function SideMenu() {
  const [errorMessage] = useState<string>();
  const [activeLink, setActiveLink] = useState('Settings');
  const { data, selectedExercise, setSelectedExercise } = useMyContext();


  console.log("sideMenu data", data);


  function setActiveExercise(name: string) {
    setActiveLink(name);
    const exercise = data.find((exercise) => exercise.name === name);
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



        <div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        {data &&
          data.map((link) => (
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

      </div>
    </nav>
  );
}


export default SideMenu
