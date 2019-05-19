import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  // require('../images/maldive.jpg'),
  // require('../images/maldive1.jpg'),
  // require('../images/mald1.png'),
  // require('../images/slide_7.jpg'),
  // require('../images/slide_5.jpg'),
  require('../images/slide9.jpg'),
  require('../images/slide4.jpg'),
  require('../images/slide6.jpg'),
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows:false
}
class slideshow extends Component {
    render() {
        return (
            <Fade   {...properties }>
            {/* <div  className="each-slide">
            <img src={slideImages[0]} />
            </div>
            <div className="each-slide">
            <img src={slideImages[1]} />
            </div> */}
            <div className="each-fade">   
            <div className="image-container">
              <img alt="tour" src={slideImages[0]} />
              </div>
            </div>
            <div className="each-fade">    
            <div className="image-container">
              <img alt="tour" src={slideImages[1]} />
              </div>
            </div>
            <div className="each-fade">    
            <div className="image-container">
              <img alt="tour" src={slideImages[2]} />
              </div>
            </div>
          </Fade>
     
        );
    }
}

export default slideshow;