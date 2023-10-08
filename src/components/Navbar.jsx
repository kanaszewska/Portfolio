import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

import '../styles/Navbar.css';
import Resume from '../assets/resume.pdf';

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);

  const handleMouseEnter = () => {
    setMenuActive(true);
  };

  const handleMouseLeave = () => {
    setMenuActive(false);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='LogoImage'/>
      </div>
        <div className="menu-toggle" id="mobile-menu" 
        onMouseEnter={handleMouseEnter}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      <ul className={`menu ${menuActive ? 'active' : 'not-active'}`} id="menu" onMouseLeave={handleMouseLeave}>
        <li>
          <Link to='home'>Home</Link>
        </li>
        <li>
          <Link to='skills'>Skills</Link>
        </li>
        <li>
          <Link to='work'>Work</Link>
        </li>
        <li>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
      <div className='social-icons'>
        <ul>
          <li className='icon'>
            <a
              className='font'
              href="https://www.linkedin.com/in/dominika-d%C4%99bska-kanaszewska-660095154/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin/>
            </a>
          </li>
          <li className='icon'>
            <a
              className='font'
              href="https://github.com/kanaszewska?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub/>
            </a>
          </li>
          <li className='icon'>
            <a
              className='font'
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;