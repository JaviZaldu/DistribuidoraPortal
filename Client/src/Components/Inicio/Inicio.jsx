import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Inicio.module.css"

import flyer1 from '../../Assets/Flyers/flyer1.png';
import flyer2 from '../../Assets/Flyers/flyer2.png';
import flyer3 from '../../Assets/Flyers/flyer3.png';
import flyer4 from '../../Assets/Flyers/flyer4.png';

import ParqueExterior1 from '../../Assets/FotosEmpresa/ParqueExterior1.webp';
import ParqueExterior2 from '../../Assets/FotosEmpresa/ParqueExterior2.webp';
import fotoOfertas from '../../Assets/FotosEmpresa/fotoOfertas.webp';
import fotoRedes from '../../Assets/FotosEmpresa/fotoRedes.webp';
import botonOfertas from '../../Assets/FotosEmpresa/botonOfertas.png';
import botonRedes from '../../Assets/FotosEmpresa/botonRedes.png';


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
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const settings2 = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    swipe: false,
    arrows: false,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div id="inicio" className={styles.container} >
      <div className={styles.flyerContainer}>
        <Slider {...settings}>
          <div>
            <img src={flyer1} alt="Flyer 1" className={styles.flyerImage} />
          </div>
          <div>
            <img src={flyer2} alt="Flyer 2" className={styles.flyerImage} />
          </div>
          <div>
            <img src={flyer3} alt="Flyer 3" className={styles.flyerImage} />
          </div>
          <div>
            <img src={flyer4} alt="Flyer 4" className={styles.flyerImage} />
          </div>
        </Slider>
      </div>
      <div className={styles.QHacemosContainer}>

          <div className={styles.QHacemosTexto}>
            <h2>¡Siempre el mejor precio!</h2>
            <p>Venta y Distribución al por menor y por mayor de Pañales, 
              Papeles, artículos y materiales de limpieza y afines, artículos de cosmética, tocador, perfumería y afines, productos alimenticios, 
              comestibles y bebidas en general.</p>
          </div>

          <div className={styles.slider2}>
            <Slider {...settings2}>
              <div>
                <img src={ParqueExterior1} alt="ParqueExterior 1" className={styles.ParqueExterior} />
              </div>
              <div>
                <img src={ParqueExterior2} alt="ParqueExterior 2" className={styles.ParqueExterior} />
              </div>
            </Slider>
           </div>
      </div>

      <div className={styles.RyOContainer}>
        <div className={styles.redesContainer}>
          <img src={fotoRedes} alt="fotoRedes" className={styles.fotoRedes} />
          <a href="https://www.instagram.com/portal.distribuidorasrl/" target="_blank" rel="noreferrer">
            <img src={botonRedes} alt="botonRedes" className={styles.botonRedes} />
          </a>
        </div>
        <div className={styles.ofertasContainer}>
          <img src={fotoOfertas} alt="fotoOfertas" className={styles.fotoOfertas} />
          <a href="https://drive.google.com/drive/folders/1JtqeghtQKtKru50huRBvgKFOOk1-Ma2-?usp=sharing" target="_blank" rel="noreferrer">
            <img src={botonOfertas} alt="botonOfertas" className={styles.botonOfertas} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;