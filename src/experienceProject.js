import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

import { Parallax } from 'react-parallax';

class ExperiencesProjects extends Component {  
  componentDidMount() {
    sr.reveal(this.refs.experienceHeader, {reset:true, viewFactor: 0.4, useDelay: 'onload',viewOffset: { top: 80}, origin:'right',distance:'120px'})
    sr.reveal(this.refs.projectHeader, {reset:true, viewFactor: 0.4, useDelay: 'onload',viewOffset: { top: 80}, origin:'left',distance:'120px'})
  }

  render() {
  	return (
  	  <section id='ExperiencesProjects'>
        <Parallax bgImage={require('./assets/background.jpg')} strength={200}>
        <div className='header' ref='experienceHeader'>Experiences</div>
        <Grid>
          <Row>
            <Work url='https://www.kudolife.com' bg='./assets/kudolifebg.jpg' logo='./assets/prizmmedialogo.png' description='Junior Software Developer' />
            <Work url='http://lc.landfood.ubc.ca' bg='./assets/ubcbg.jpg' logo='./assets/ubclogo.png' description='IT Tech Support' />
            <Work url='https://fusionpipe.com' bg='./assets/fusionpipebg.jpg' logo='./assets/fusionpipelogo.png' description='Multi-Factor Authentication' />
          </Row>
        <div className='header' ref='projectHeader'>Projects</div>
          <Row>
            <Project url='https://github.com/jayychang/maid-chan/' bg='./assets/discord.jpg' description='Discord Chat Bot' />
            <Project url='https://jayychang.github.io/sipStirred/' bg='./assets/sipnstirred.png' description='Web Application' />
            <Project url='https://jayychang.github.io/tournamentBrackets/' bg='./assets/bracket.png' description='Tournament Bracket Generator' />
            <Project url='https://github.com/jayychang/CustomLinedTextView' bg='./assets/notes.jpg' description='Lined TextView      Objective-C Library' />
            <Project url='https://github.com/jayychang/HabitReminder' bg='./assets/calender.jpg' description='Mobile Reminder Application' />
            <Project url='https://github.com/jayychang/FirebaseChat' bg='./assets/chat.png' description='Firebase Chatroom' />
          </Row>
        </Grid>
        </Parallax>
      </section>
    );
  }
}

class Project extends Component {
  openNew(url) {
    window.open(url);
  }

  componentDidMount() {
    sr.reveal(this.refs.circle, {reset: true, useDelay: 'onload',viewOffset: { top: 80},rotate: { x: 60, y: 60, z: 60 },scale: 0.8});
  }
 
  render() {
    const width =
    {
      'width':'80%'
    }
    const margin =
    {
      'margin-bottom':'50px'
    }
    return (
      <Col className='noPad' xs={12} sm={6} md={4}>
        <div className='circleWrapper' style={margin} ref='circle'>
          <img className='circleBgWrapper' src={require(this.props.bg)} />
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
            <h3 style={width}>{this.props.description}</h3>
          </div>
        </div>
      </Col>
    );
  }
}

class Work extends Component {
  openNew(url) {
      window.open(url);
  };

  componentDidMount() {
    sr.reveal(this.refs.circle, {reset: true, useDelay: 'onload',viewOffset: { top: 80},rotate: { x: -60, y: -60, z: -60 },scale: 0.8});
  };

  render() {
    return (
      <Col className='noPad' xs={12} sm={4}>
        <div className='circleWrapper' ref='circle'>
          <img className='circleBgWrapper' src={require(this.props.bg)}  />
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
            <img className='logoWrapper' src={require(this.props.logo)} />
          </div>
        </div>
      </Col>
    );
  }
}

export default ExperiencesProjects;