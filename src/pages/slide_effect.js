import React from 'react';
import { Slide } from 'react-slideshow-image';

import './slide.css';
import Swiper from 'react-slider-swiper';
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


const params = {
  pagination: '.swiper-pagination ',
  paginationCustomizedClass: 'customized-swiper-pagination', // Add your class name for pagination container
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  nextButtonCustomizedClass: 'nextButtonCustomizedClass', // Add your class name for next button
  prevButtonCustomizedClass: 'customized-swiper-button-prev', // Add your class name for prev button
  containerClass: 'customized-swiper-container swiper-container ', // Replace swiper-container with customized-swiper-container
  spaceBetween: 30 
}

const Slideshow = () => {
  const load_image = slideImages.map(images => (
    <div key={images}>    

      <div className="image-center" style={{'width':'100%','backgroundImage': `url(` +images+ `)`}}/>      

    </div> 
    ));
    

    return (
      <Swiper {...params}> 
          {load_image}
    </Swiper>
    )
}

export default Slideshow;

