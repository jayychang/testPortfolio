import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './components.css';

import StickyNav from './stickynav';
import Welcome from './welcome';
import Experiences from './experiences';
import Projects from './projects';
import AboutMe from './aboutme';
import Skills from './skills';
import Footer from './footer';

ReactDOM.render(
  <div>
  	<Welcome />
  	<StickyNav />
    <Experiences />
    <Projects />
    <AboutMe />
    <Skills />
    <Footer />
  </div>,
  document.getElementById('root')
);
