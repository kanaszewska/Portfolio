import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import Git from '../assets/git.png';
import ReactRouter from '../assets/react_router.png';
import GitHub from '../assets/github.png';
import Axios from '../assets/axios.png';
import TypeScript from '../assets/type_script.png';
import WebCookies from '../assets/webcookies.png';
import JAVA from '../assets/java.png';
import SpringBoot from '../assets/springboot.png';
import Hibernate from '../assets/hibernate.png';
import Postman from '../assets/postman.png';
import SQL from '../assets/sql.jpg';
import MySQL from '../assets/mysql.png';
import Docker from '../assets/docker.png';



import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='container'>
          <div className='description'>
              <p className='description'>These are the technologies I've worked with</p>
          </div>
          <div className='technologies'>
          <div className='technologies-important'>
            <div className='field-important'>
                    <img className='icon-img' src={JAVA} alt="JAVA icon" />
                    <p className='icon-name'>JAVA</p>
                </div>
                <div className='field-important'>
                    <img className='icon-img' src={SpringBoot} alt="Spring-Boot icon" />
                    <p className='icon-name'>SPRING BOOT</p>
                </div>
            <div className='field-important'>
                    <img className='icon-img' src={Hibernate} alt="Hibernate icon" />
                    <p className='icon-name'>HIBERNATE</p>
                </div>
                </div>
            <div className='field'>
                    <img className='icon-img' src={Postman} alt="Postman icon" />
                    <p className='icon-name'>POSTMAN</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={SQL} alt="SQL icon" />
                    <p className='icon-name'>SQL</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={MySQL} alt="MySQL icon" />
                    <p className='icon-name'>MYSQL</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={Git} alt="GIT icon" />
                    <p className='icon-name'>GIT</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={GitHub} alt="GitHub icon" />
                    <p className='icon-name'>GITHUB</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={Docker} alt="Docker icon" />
                    <p className='icon-name'>DOCKER</p>
                </div>
              <div className='technologies-important'>
              <div className='field-important'>
                    <img className='icon-img' src={HTML} alt="HTML icon" />
                    <p className='icon-name'>HTML</p>
                </div>
                <div className='field-important'>
                    <img className='icon-img' src={JavaScript} alt="JavaScript icon" />
                    <p className='icon-name'>JAVASCRIPT</p>
                </div>
                <div className='field-important'>
                    <img className='icon-img' src={ReactImg} alt="REACT icon" />
                    <p className='icon-name'>REACT</p>
                </div>
                </div>
                <div className='field'>
                    <img className='icon-img' src={TypeScript} alt="TypeScript icon" />
                    <p className='icon-name'>TYPESCRIPT</p>
                    
                </div>
                <div className='field'>
                    <img className='icon-img' src={CSS} alt="CSS icon" />
                    <p className='icon-name'>CSS</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={Redux} alt="REDUX icon" />
                    <p className='icon-name'>REDUX</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={ReactRouter} alt="ReactRouter icon" />
                    <p className='icon-name'>REACT ROUTER</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={Axios} alt="AXIOS icon" />
                    <p className='icon-name'>AXIOS</p>
                </div>
                <div className='field'>
                    <img className='icon-img' src={WebCookies} alt="WebCookies icon" />
                    <p className='icon-name'>WEB COOKIES</p>
                </div>
              {/* </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;