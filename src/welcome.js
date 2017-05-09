import React, { Component } from 'react';
import {init} from 'ityped';

class Welcome extends Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Jay Chang :)', 'Software Engineer', 'Full Stack Developer', 'Web and Mobile', 'Vancouver, BC'],
      startDelay: 300,
      backDelay: 1200,
      loop: true
    });
  }

  render() {
    return (
      <section id='Welcome'>
        <div><span className='typed' ref='typed' /></div>
      </section>
    );
  }
}

export default Welcome;
