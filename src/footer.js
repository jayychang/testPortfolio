import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends Component {
  render() {
  	const styles = 
  	{
      'height': '140px'
    }

    return (
      <section id='Footer' style={styles}>
        <Grid>
          <Row>
          <Col xs={3} />
          <Icon url='https://github.com/jayychang' icon='./assets/githublogo.png' />
          <Icon url='https://www.linkedin.com/in/jaychanggg/' icon='./assets/linkedinlogo.png' />
          <Icon url='mailto:jaychanggg@gmail.com' icon='./assets/emaillogo.png' />
          <Col xs={3} />
          </Row>
        </Grid>
      </section>
    )
  }
}

class Icon extends Component {
  openNew(url) {
      window.open(url);
  };
  render() {
    return (
      <Col xs={2}><img onClick={() => this.openNew(this.props.url)} className='icon clickable' src={require(this.props.icon)} /></Col>
    )
  }
}

export default Footer;