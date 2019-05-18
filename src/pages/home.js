import React, { Component } from 'react';
import Header from  '../pages/header.js';
import Slideshow from '../pages/slideshow.js';
import About from '../pages/about.js';
class Home extends Component {
  render() {
    return (
      <div >
            <Header/>
            <Slideshow/>
            <About/>
      </div>
    );
  }
}

export default Home;