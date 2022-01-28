import React from 'react';
import './Main.css';
import MyTyped from '../../Typed/MyTyped';
import AboutMe from '../forMainPage/aboutMe/AboutMe';
import Skills from '../forMainPage/mySkills/Skills';
import Projects from '../forMainPage/myProjects/Projects';
import './MainResponse.css';

import developerImg from '../../img/icon/codding.svg';

export default function MainPage() {
  return (
    <>
      <main className="main-page">
        <div className="main-content">
          <div className="div-content-main">
            <span className="greeting">
              Olá <img className="greeting-hand" src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" alt="gif-hand" width="100px" />
              , eu sou
            </span>
            <br />
            <span className="my-name">Douglas Oliveira</span>
            <br />
            <span className="greeting">Desenvolvedor Front-end</span>
            <MyTyped />
          </div>
          <div className="img-developer">
            <img className="img-developer-icon" src={ developerImg } alt="developer-icon" width="800px"/>
          </div>
        </div>
      </main>
      <div className="hr-center">
        <hr className='hr-main'/>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
