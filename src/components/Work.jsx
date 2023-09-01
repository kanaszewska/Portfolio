import React from "react";

import "../styles/Work.css";

const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div>
          <p className="description"> Check out some of my recent work</p>
        </div>
        <div className="projects-backend">
        <div className="project-java1" id="screen">
            <div className="opacity">
              <h4>Pharmacy</h4>
              <div className="link">
                <a href="https://github.com/kanaszewska/pharmacy/tree/master/src/main">
                  <button className="code">Code</button>
                </a>
                <a href="https://github.com/kanaszewska/pharmacy/tree/master/src/test/java/com/debska/pharmacy">
                  <button className="test">Test</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-frontend">
          <div className="project1" id="screen">
            <div className="opacity">
              <h4>Shop Aplication</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/Shop_redux/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/Shop_redux">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project2" id="screen">
            <div className="opacity">
              <h4>Checklist Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/ToDoListTypeScript/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/ToDoListTypeScript">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project3" id="screen">
            <div className="opacity">
              <h4>API Search Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/API_search/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/API_search">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project4" id="screen">
            <div className="opacity">
              <h4>Form Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/Form/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/Form">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project5" id="screen">
            <div className="opacity">
              <h4>Weather Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/WeatherTypeScript/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/WeatherTypeScript">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project6" id="screen">
            <div className="opacity">
              <h4>Company Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/Company_PortfolioTypeScript/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/Company_PortfolioTypeScript">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project7" id="screen">
            <div className="opacity">
              <h4>BMI Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/BMITypeScript/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/BMITypeScript">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project8" id="screen">
            <div className="opacity">
              <h4>Game Application</h4>
              <div className="link">
                <a href="https://kanaszewska.github.io/GameRedux/">
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/kanaszewska/GameRedux">
                  <button className="code">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
