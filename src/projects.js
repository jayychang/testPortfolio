import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

import { Parallax } from 'react-parallax';

class Projects extends Component {  
  componentDidMount() {
    sr.reveal(this.refs.header, {reset: true, useDelay: 'onload', viewOffset: { top: 80}});
  }
  render() {
    const styles = 
      {
      }
      
    return (
      <section id='Projects'>
            <Parallax bgImage={require('./assets/projectsbg.jpg')} strength={400}>

        <div className="header" ref='header' style={styles}>Personal Projects</div>
        <Grid fluid>
          <Row>
            <Circle url='https://github.com/jayychang/maid-chan/' bg='./assets/discord.jpg' description='Discord Chat Bot' />
            <Circle url='https://jayychang.github.io/sipStirred/' bg='./assets/sipnstirred.png' description='Web Application' />
            <Circle url='https://jayychang.github.io/tournamentBrackets/' bg='./assets/bracket.png' description='Tournament Bracket Generator' />
            <Circle url='https://github.com/jayychang/CustomLinedTextView' bg='./assets/notes.jpg' description='Lined TextView      Objective-C Library' />
            <Circle url='https://github.com/jayychang/HabitReminder' bg='./assets/calender.jpg' description='Mobile Reminder Application' />
            <Circle url='https://github.com/jayychang/FirebaseChat' bg='./assets/chat.png' description='Firebase Chatroom' />
          </Row>
        </Grid>
              </Parallax>

      </section>
    );
  }
}

class Circle extends Component {
  openNew(url) {
    window.open(url);
  }

  componentDidMount() {
    sr.reveal(this.refs.circle, {reset: true, useDelay: 'onload', viewOffset: { top: 80}});
  }
 
  render() {
    const width =
    {
      'width':'80%'
    }

    return (
      <Col className='noPad' xs={12} sm={6} md={4}>
        <div className='circleWrapper' ref='circle'>
          <img className='circleBgWrapper' src={require(this.props.bg)} />
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
            <h3 style={width}>{this.props.description}</h3>
          </div>
        </div>
      </Col>
    );
  }
}

export default Projects;