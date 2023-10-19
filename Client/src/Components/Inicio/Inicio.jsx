import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'
import styles from "./Inicio.module.css"

import flyer1 from '../../Assets/Flyers/flyer1.png';
import flyer2 from '../../Assets/Flyers/flyer2.png';
import flyer3 from '../../Assets/Flyers/flyer3.png';
import flyer4 from '../../Assets/Flyers/flyer4.png';

function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    swipe: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div id="inicio" className={styles.container}>
      <Slider {...settings}>
        <div>
          <motion.img src={flyer1} alt="Flyer 1" className={styles.flyerImage} />
        </div>
        <div>
          <motion.img src={flyer2} alt="Flyer 2" className={styles.flyerImage} />
        </div>
        <div>
          <motion.img src={flyer3} alt="Flyer 3" className={styles.flyerImage} />
        </div>
        <div>
          <motion.img src={flyer4} alt="Flyer 4" className={styles.flyerImage} />
        </div>
      </Slider>
    </div>
  );
}

export default Inicio;
