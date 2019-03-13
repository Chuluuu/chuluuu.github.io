import React, { Component } from 'react';
import maldive from '../images/maldive.jpg';
import '../pages/home.css';
class Home extends Component {
  render() {
    return (
      <div  style = {{ backgroundImage: 'url(' + maldive + ')', 
        backgroundSize: 'cover', 
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        height:'300px',
      }}>
            
      </div>
    );
  }
}

export default Home;