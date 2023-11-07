import React, { useState, useEffect } from 'react';
import styles from '../NavBar/NavBar.module.css';
import { useAnimation } from 'framer-motion';

import LogoHorizontal from '../../Assets/Logos/LogoHorizontal.png';
import MenuDesp from '../MenuDesp/MenuDesp';

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  // Menu desplegable
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const actualizarAnchoPantalla = () => {
    setAnchoPantalla(window.innerWidth);
  };

  // Agrega un efecto para escuchar cambios en el ancho de la pantalla
  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoPantalla);
    // Limpia el efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', actualizarAnchoPantalla);
    };
  }, []);

  const handleShowMenu = (e) => {
    e.preventDefault();
    console.log('handleShowMenu ejecutado');
    setShowMenu(!showMenu);
  };

  // Scrolls
  const controls = useAnimation();

  const scrollToInicio = async () => {
    const destino = document.getElementById("inicio");
    if (destino) {
      await controls.start({ y: destino.offsetTop });
      window.scrollTo({ top: destino.offsetTop, behavior: 'smooth' });
    }
  }

  const scrollToNosotros = async () => {
    const destino = document.getElementById("nosotros");
    if (destino) {
      await controls.start({ y: destino.offsetTop });
      window.scrollTo({ top: destino.offsetTop - 150, behavior: 'smooth' });
    }
  }

  const scrollToSucursales = async () => {
    const destino = document.getElementById("sucursales");
    if (destino) {
      await controls.start({ y: destino.offsetTop });
      window.scrollTo({ top: destino.offsetTop - 50, behavior: 'smooth' });
    }
  }

  const scrollToContacto = async () => {
    const destino = document.getElementById("contacto");
    if (destino) {
      await controls.start({ y: destino.offsetTop });
      window.scrollTo({ top: destino.offsetTop - 60, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    // Animación de la navbar
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
    <div >
      {anchoPantalla > 800 ? (
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
      ) : (
        <div className={`${styles.navbar} ${navbarFixed ? styles.fixedNavbar : ''}`}>
        <img className={styles.logo} src={LogoHorizontal} alt="logo" />
        <MenuDesp scrollToInicio={scrollToInicio} scrollToContacto={scrollToContacto} scrollToNosotros={scrollToNosotros} scrollToSucursales={scrollToSucursales}></MenuDesp>
        </div>
      )}
    </div>
  );
}

export default Navbar;
