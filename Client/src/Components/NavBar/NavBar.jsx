import React, { useState, useEffect } from 'react';
import styles from '../NavBar/NavBar.module.css';
import { useAnimation } from 'framer-motion';

import LogoHorizontal from '../../Assets/Logos/LogoHorizontal.png';

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  const controls = useAnimation();
  const scrollToInicio = async () => {
    const destino = document.getElementById("inicio")
      if(destino){
        await controls.start({y:destino.offsetTop })
        window.scrollTo({top: destino.offsetTop, behavior: 'smooth'})
      }
    }
  
    const scrollToNosotros = async () => {
      const destino = document.getElementById("nosotros")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 150, behavior: 'smooth'})
        }
      }

    const scrollToSucursales = async () => {
      const destino = document.getElementById("sucursales")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 50, behavior: 'smooth'})
        }
    }

    const scrollToContacto = async () => {
      const destino = document.getElementById("contacto")
        if(destino){
          await controls.start({y:destino.offsetTop})
          window.scrollTo({top: destino.offsetTop - 60, behavior: 'smooth'})
        }
    }

  useEffect(() => {  //animacion de la navbar.
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`${styles.navbar} ${navbarFixed ? styles.fixedNavbar : ''}`}>
      <img className={styles.logo} src={LogoHorizontal} alt="logo" />
      <div className={styles.sections}>
        <ul>
            <li onClick={scrollToInicio}>Inicio</li>
            <li onClick={scrollToNosotros}>Nosotros</li>
            <li onClick={scrollToSucursales}>Sucursales</li>
            <li onClick={scrollToContacto}>Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;