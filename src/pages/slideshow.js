import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import mald from '../images/maldive2.jpg';
const slideImages = [
  require('../images/maldive.jpg'),
  require('../images/maldive1.jpg'),
  require('../images/mald1.png'),
  require('../images/slide_7.jpg'),
  require('../images/slide_5.jpg'),
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
class slideshow extends Component {
    render() {
        return (
            <Slide   {...properties }>
            {/* <div  className="each-slide">
            <img src={slideImages[0]} />
            </div>
            <div className="each-slide">
            <img src={slideImages[1]} />
            </div> */}
            <div className="each-slide">             
              <img src={slideImages[2]} />
            </div>
            <div className="each-slide">             
              <img src={slideImages[4]} />
            </div>
          </Slide>
     
        );
    }
}

export default slideshow;