import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Body from './pages/body';
import Slideshow from './pages/slide_effect';


class App extends Component {
  render() {
    return (
     <div>            
        {/* <Home/> */}
        <Slideshow/>
    </div>
    );
  }
}

export default App;


