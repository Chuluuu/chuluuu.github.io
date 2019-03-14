import React from 'react';
import { Slide } from 'react-slideshow-image';
import {maldive} from '../images/maldive.jpg';
import './slide.css';
 
const slideImages = [
  '../images/maldive.jpg',
  '../images/maldive1.jpg',
  '../images/maldive2.jpg',
  // '../images/maldive3.jpg',
  // '../images/maldive4.jpg',
  // '../images/maldive5.jpg',
  // '../images/maldive6.jpg',
  // '../images/maldive7.jpg',
];
 
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
//  console.log('TEEE'+maldive)
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${maldive})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div className='trees__tree' >
            <span>Slide 2</span>
          </div>
        </div>
        {/* <div className="each-slide">
          <div style={{'backgroundImage': 'url(require('${slideImages[2]})+')' }}>
            <span>Slide 3</span>
          </div>
        </div> */}
        
      </Slide>
    )
}

export default Slideshow;

