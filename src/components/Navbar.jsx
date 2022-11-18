import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

import '../styles/Navbar.css';

const Navbar = () => {


  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='LogoImage'/>
      </div>

      <ul className='menu'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='social-icons'>
        <ul>
          <li className='icon'>
            <a
              className='font'
              href="https://www.linkedin.com/in/dominika-d%C4%99bska-kanaszewska-660095154/"
            >
              Linkedin <FaLinkedin/>
            </a>
          </li>
          <li className='icon'>
            <a
              className='font'
              href="https://github.com/kanaszewska?tab=repositories"
            >
              Github <FaGithub/>
            </a>
          </li>
          {/* <li className='icon'>
            <a
              className='font'
              href='c'
            >
              Email <HiOutlineMail/>
            </a>
          </li> */}
          <li className='icon'>
            <a
              className='font'
              href='/'
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