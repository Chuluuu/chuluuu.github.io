import React from 'react';
import { Slide } from 'react-slideshow-image';
import Slider from "react-slick";
//import {maldive} from '../images/maldive.jpg';
import './slide.css';
 
const slideImages = [
  require('../images/maldive.jpg'),
  require('../images/maldive1.jpg'),
  require('../images/maldive2.jpg'),
  require('../images/maldive3.jpg'),
  require('../images/maldive4.jpg'),
  require('../images/maldive5.jpg'),
  require('../images/maldive6.jpg'),
  require('../images/maldive7.jpg'),
];
const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
};
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
    <div  key={images}>    
      <div className="image-center" style={{'background-image':'cover','width':'100%','backgroundImage': `url(` +images+ `)`}}>      
    </div>
    </div> 
    ));
    

    return (
      <Slide {...properties}> 
          {load_image}
    </Slide>
    )
}

export default Slideshow;

