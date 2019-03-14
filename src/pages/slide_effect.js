import React from 'react';
import { Slide } from 'react-slideshow-image';
//import {maldive} from '../images/maldive.jpg';
import './slide.css';
 
const slideImages = [
  '/images/maldive.jpg',
  '/images/maldive1.jpg',
  '/images/maldive2.jpg',
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
  const load_image = slideImages.map(images => (
    <div className="each-slide">    
    {images}
    <div style={{'backgroundImage': `url(` + images + `)`}}>
      <span>Slide 1</span>
    </div>
    </div> 
    ));
    
    return (
      // <Slide {...properties}> 
      <div>   
        <img src='/images/maldive2.jpg' width="50px"></img>
        </div>
      // </Slide>
    )
}

export default Slideshow;

