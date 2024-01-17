import { useState } from 'react'
import './SideMenu.css'
import { MantineLogo } from '@mantinex/mantine-logo';
import '@mantinex/mantine-logo/styles.css';
import '@mantine/core/styles.css';
import { useMyContext } from "../../hooks/useContext";

function SideMenu() {
  const [errorMessage] = useState<string>();
  const [activeLink, setActiveLink] = useState('Settings');
  const { data } = useMyContext();


  console.log("sidemenu data", data);


  return (
    <nav className="navbar">
      <div className="aside">
        <div className="logo">
          <MantineLogo type="mark" size={30} /> {/* Use the MantineLogo component */}
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


export default SideMenu
