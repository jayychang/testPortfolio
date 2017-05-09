import React, {Component} from 'react';


class StickyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {position: 'absolute', top:'auto', bottom:0};
    this.sticky = 'notSticky';
    this.events = [
      'resize',
      'scroll',
      'touchstart',
      'touchmove',
      'touchend',
      'pageshow',
      'load'
    ];
  }

  componentDidMount() {
    this.events.forEach(action => window.addEventListener(action, this.stickyScroll.bind(this)))
  }

  componentWillUnmount() {
    this.events.forEach(action => window.removeEventListener(action, this.stickyScroll.bind(this)))
  }

  stickyScroll() {
    const dist = window.innerHeight - event.srcElement.body.scrollTop - 60;
    if (dist <= 0) {
      if (this.sticky == 'notSticky'){
        this.sticky = 'isSticky'
        const style ={position: 'fixed', top:0, bottom:'auto'}
        this.setState(style);
      }
    } else {
	  if (this.sticky == 'isSticky'){
	    this.sticky = 'notSticky'
       const style ={position: 'absolute', top:'auto', bottom:0}
	    this.setState(style)
      }
    }
  }

  render() {
    return (
      <div style={this.state} id='Navigation'>
        <div>
          <a href="#Experiences">Experiences</a>
          <a href="#Projects">Projects</a>
          <a href="#AboutMe">About Me</a>
          <a href="#Footer">Contact me</a>
        </div>
      </div>
    );
  }
}

export default StickyNav;