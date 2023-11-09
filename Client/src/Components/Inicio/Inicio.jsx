import React from "react";
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

import marcas1 from '../../Assets/Marcas/marcas1.webp';
import marcas2 from '../../Assets/Marcas/marcas2.webp';
import marcas3 from '../../Assets/Marcas/marcas3.webp';
import marcas4 from '../../Assets/Marcas/marcas4.webp';

import VideoPortal from '../../Assets/VideoPortal.mp4';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay,EffectFade } from 'swiper/modules';


function Inicio() {

  return (
    <div id="inicio" className={styles.container} >
      <div className={styles.flyerContainer}>
        <Swiper effect={'fade'} autoplay={{ delay: 2500, disableOnInteraction: false,  }} modules={[Autoplay,EffectFade]}>
          <SwiperSlide><img src={flyer1} alt="Flyer 1" className={styles.flyerImage} /></SwiperSlide>
          <SwiperSlide><img src={flyer2} alt="Flyer 2" className={styles.flyerImage} /></SwiperSlide>
          <SwiperSlide><img src={flyer3} alt="Flyer 3" className={styles.flyerImage} /></SwiperSlide>
          <SwiperSlide><img src={flyer4} alt="Flyer 4" className={styles.flyerImage} /></SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.QHacemosContainer}>
        <div className={styles.QHacemosTexto}>
          <h2>¡Siempre el mejor precio!</h2>
          <p>Venta y Distribución al por menor y por mayor de Pañales, Papeles, artículos y materiales de limpieza y afines, artículos de cosmética, tocador, perfumería y afines, productos alimenticios, comestibles y bebidas en general.</p>
        </div>
        <div className={styles.slider2}>
          <Swiper effect={'fade'} autoplay={{ delay: 2500, disableOnInteraction: false,  }} modules={[Autoplay,EffectFade]}>
              <SwiperSlide><img src={ParqueExterior1} alt="ParqueExterior 1" className={styles.ParqueExterior} /></SwiperSlide>
              <SwiperSlide><img src={ParqueExterior2} alt="ParqueExterior 2" className={styles.ParqueExterior} /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={styles.RyOContainer}>
        <div className={styles.redesContainer}>
          <a href="https://www.instagram.com/portal.distribuidorasrl/" target="_blank" rel="noreferrer">
            <img src={fotoRedes} alt="fotoRedes" className={styles.fotoRedes} />
          </a>
          <a href="https://www.instagram.com/portal.distribuidorasrl/" target="_blank" rel="noreferrer">
            <img src={botonRedes} alt="botonRedes" className={styles.botonRedes} />
          </a>
        </div>
        <div className={styles.ofertasContainer}>
          <a href="https://drive.google.com/drive/folders/15FmZOUOCZLtRgIiQRnTOeAtDHQkwSffH?usp=sharing" target="_blank" rel="noreferrer">
            <img src={fotoOfertas} alt="fotoOfertas" className={styles.fotoOfertas} />
          </a>
          <a href="https://drive.google.com/drive/folders/15FmZOUOCZLtRgIiQRnTOeAtDHQkwSffH?usp=sharing" target="_blank" rel="noreferrer">
            <img src={botonOfertas} alt="botonOfertas" className={styles.botonOfertas} />
          </a>
        </div>
      </div>

      <div className={styles.marcasContainer}>
        <Swiper effect={'fade'} autoplay={{ delay: 2500, disableOnInteraction: false,  }} modules={[Autoplay,EffectFade]}>
          <SwiperSlide><img src={marcas1} alt="marcas 1" className={styles.marcasImage}/></SwiperSlide>
          <SwiperSlide><img src={marcas2} alt="marcas 2" className={styles.marcasImage}/></SwiperSlide>
          <SwiperSlide><img src={marcas3} alt="marcas 3" className={styles.marcasImage}/></SwiperSlide>
          <SwiperSlide><img src={marcas4} alt="marcas 4" className={styles.marcasImage}/></SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.videoContainer}>
        <video controls className={styles.video}>
          <source src={VideoPortal} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
      
    </div>
  );
}

export default Inicio;