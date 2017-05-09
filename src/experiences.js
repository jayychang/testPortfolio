import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

import { Parallax } from 'react-parallax';

class Experiences extends Component {  
  componentDidMount() {
    sr.reveal(this.refs.header, {reset: true, useDelay: 'onload', viewOffset: { top: 80, right: 0, bottom: 0, left: 0 }});
  }
  render() {
  	const styles = 
  	  {
  	  }

  	return (
  	  <section id='Experiences'>
      <Parallax bgImage={require('./assets/experiencesbg.jpg')} strength={400}>
        <div className='header' ref='header' style={styles}>Experiences</div>
        <Grid fluid>
          <Row>
            <Col className='noPad' xs={12} sm={4}><Box url='https://www.kudolife.com' bg='./assets/kudolifebg.jpg' logo='./assets/prizmmedialogo.png' description='Junior Software Developer' /></Col>
            <Col className='noPad' xs={12} sm={4}><Box url='http://lc.landfood.ubc.ca' bg='./assets/ubcbg.jpg' logo='./assets/ubclogo.png' description='IT Tech Support' /></Col>
            <Col className='noPad' xs={12} sm={4}><Box url='https://fusionpipe.com' bg='./assets/fusionpipebg.jpg' logo='./assets/fusionpipelogo.png' description='Multi-Factor Authentication' /></Col>
          </Row>
        </Grid>
        </Parallax>
      </section>
    );
  }
}

class Box extends Component {
  openNew(url) {
      window.open(url);
  };

  componentDidMount() {
    sr.reveal(this.refs.box, {reset: true, useDelay: 'onload', viewOffset: { top: 80, right: 0, bottom: 0, left: 0 }});
  };

  render() {
    return (
      <div ref='box'>
        <div className='circleWrapper'>
          <img className='circleBgWrapper' src={require(this.props.bg)}  />
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
           <img className='logoWrapper' src={require(this.props.logo)} />
          </div>
          </div>
        </div>
  	);
  }
}

export default Experiences;