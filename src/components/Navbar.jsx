import React from 'react';
import copy from 'clipboard-copy';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

import '../styles/Navbar.css';

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');
  const [copyMessagePosition, setCopyMessagePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setMenuActive(true);
  };

  const handleMouseLeave = () => {
    setMenuActive(false);
  };

  const handleCopy = (text, e) => {
    copy(text);
    setCopyMessage(`Copied: ${text}`);
    setCopyMessagePosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => setCopyMessage(''), 1500);
  };

  const handleMouseMoveContact = (e) => {
    setCopyMessagePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterContact = (e) => {
    setCopyMessage('Click to copy');
    setCopyMessagePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeaveContact = () => {
    setCopyMessage('');
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
      <div className='social-icons' onMouseMove={handleMouseMoveContact}>
        <ul>
          <li className='phone-icon' 
          onClick={(e) => handleCopy('+48 501 497 824', e)}
          onMouseEnter={handleMouseEnterContact}
          onMouseLeave={handleMouseLeaveContact}>
            <span>+48 501 497 824 </span> <FaPhoneSquareAlt />
          </li>
          <li className='mail-icon' 
            onClick={(e) => handleCopy('kanaszewskadominika@gmail.com', e)}
          onMouseEnter={handleMouseEnterContact}
          onMouseLeave={handleMouseLeaveContact}>
              <span>kanaszewskadominika@gmail.com </span>
              <FaEnvelope />
            </li>
        </ul>
        {copyMessage && (
        <div className='copy-message' style={{ top: `${copyMessagePosition.y}px`, left: `${copyMessagePosition.x}px` }}>
          {copyMessage}
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;