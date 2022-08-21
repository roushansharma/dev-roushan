import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Css/style.css';
import Header from '../src/Header/index';
import About from '../src/About/index'; 
import RecentWork from '../src/Recent-work/index'; 
import Skill from '../src/Skill/index'; 
import Service from '../src/Services/index';  
import ProjectTimer from '../src/Projets-timer/index'; 
import Contact from '../src/Contact/index'; 
import Footer from '../src/Footer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <RecentWork />
    <Skill />
    <Service />
    <ProjectTimer />
    <Contact /> 
    <Footer /> 
  </React.StrictMode>
); 
 
 
