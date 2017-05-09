import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

class AboutMe extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload', viewOffset: { top: 80}});
  }
  render() {
  	const styles = 
  	  {
        'height': '200px',
        'display':'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '3em',
  	  }

  	return (
      <section id='AboutMe'>
        <div ref='main'>
          <div style={styles}>About Me</div>
          <Content />
        </div>
      </section>
  	);
  }
}

class Content extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={0} smOffset={1} sm={10}><Description /></Col>
          <Col md={4} mdOffset={0} smOffset={3} sm={6}><Photo /></Col>
        </Row>
      </Grid>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <div>
        <h1 className='linedHeader'>Hello I'm Jay</h1>
        <p>I am a Software Engineer located in the beautiful Vancouver, BC. I recently graduated from the University of British Columbia with a B.ASc in Computer Engineering. School has taught me a lot. Most importantly, school taught me how to learn.</p>
        <p>From my time as a student, I gained valuable experience in both web and mobile development. I have worked with PrizmMedia building scalable apps, with FusionPipe prototyping new technologies as well as the University of British Columbia as a Tech Support.</p>
        <p>As a developer, I love playing around and learning new technologies. To be able to see a product start in its development stages all the way till it comes alive is something I am always very enthusiastic about. Of course, I am more than just a code monkey. I love to eat, play and go hiking. But mostly love eating the most.</p>
      </div>
    )
  }
}

class Photo extends Component {
  // http://toonator.com/preview/cx2nbwkrthe2
  render() {
    return (
        <img className='img-responsive center-block myPhoto' src={require('./assets/myPhoto.png')} height="50%" />
    )
  }
}

export default AboutMe;