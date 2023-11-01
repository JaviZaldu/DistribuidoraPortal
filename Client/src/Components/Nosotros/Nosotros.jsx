import Styles from "./Nosotros.module.css"
//Fotos del Swiper
import Empleados1 from "../../Assets/Empleados/empleados1.webp"
import Empleados2 from "../../Assets/Empleados/empleados2.webp"
import Empleados3 from "../../Assets/Empleados/empleados3.webp"
import Empleados4 from "../../Assets/Empleados/empleados4.webp"
import Empleados5 from "../../Assets/Empleados/empleados5.webp"
import Empleados6 from "../../Assets/Empleados/empleados6.webp"

//Estilos y configutacion del Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay,EffectFade } from 'swiper/modules';

function Nosotros() {

  return (
    <div className={Styles.Container} id="Nosotros">
        <div className={Styles.nuestroPersonal}>
            <div style={{marginTop:"-30px"}}>
                <p className={Styles.titulo}>NUESTRO PERSONAL</p>
                <p className={Styles.texto}>Sencillez, humildad, honestidad y pasión son los valores que guían nuestra empresa. Nuestro pilar es la sostenibilidad en las relaciones laborales con nuestros recursos humanos, clientes y proveedores.</p>
            </div>
            <div className={Styles.swiperContainer}>
              <Swiper
                effect={'fade'} //Efecto difuminacion
                autoplay={{ //Para que pase automatico
                  delay: 2500,
                  disableOnInteraction: false, //Puedo navegar en las fotos
                }}
                modules={[Autoplay,EffectFade]} //Hay que poner esto con los efectos que se usan
              >
                <SwiperSlide><img src={Empleados1} className={Styles.img} alt=""></img></SwiperSlide>
                <SwiperSlide><img src={Empleados2} className={Styles.img} alt=""></img></SwiperSlide>
                <SwiperSlide><img src={Empleados3} className={Styles.img} alt=""></img></SwiperSlide>
                <SwiperSlide><img src={Empleados4} className={Styles.img} alt=""></img></SwiperSlide>
                <SwiperSlide><img src={Empleados5} className={Styles.img} alt=""></img></SwiperSlide>
                <SwiperSlide><img src={Empleados6} className={Styles.img} alt=""></img></SwiperSlide>
              </Swiper>
            </div>
        </div>
        <div>
            <div className={Styles.nuestraHistoria}>
                <p className={Styles.titulo}>NUESTRA HISTORIA</p>
                <p className={Styles.texto}>Nuestra historia comenzó en 2001 en San Miguel de Tucumán. Iniciamos como comerciantes de pirotecnia y luego ampliamos nuestro enfoque a la venta de pañales y artículos de limpieza. Hoy, como empresa familiar, nos esforzamos por brindar el mejor servicio a nuestros clientes con precios asequibles y una atención de calidad, manteniendo nuestras tradiciones y valores. Nuestra visión es ser un pilar de estabilidad regional, reconocidos por la calidad de nuestros servicios y nuestra solidez financiera.</p>
            </div>
        </div>
    </div>
  );
}

export default Nosotros;