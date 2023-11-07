import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';


import styles from "./MenuDesp.module.css"

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right:'10px',
    top: '40px',
  },
  bmBurgerBars: {
    background: '#204796',
  },
  bmCrossButton: {
    height: '30px',
    width: '30px',
    marginTop:'11%'
  },
  bmCross: {
    background: '#ff5733',
  },
  bmMenu: {
    background: '#e1ebffe1',
    fontSize: '25px',
    fontWeight:'700',
    borderRadius:'20px',
    height:'auto',
    marginTop:'11%'
  },
  bmItemList: {
    color: 'black',
    padding: '1em',
  },
};

const MenuDesp = ({scrollToInicio,scrollToContacto,scrollToNosotros,scrollToSucursales}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu styles={menuStyles} width={'50%'} right isOpen={isMenuOpen} onStateChange={handleMenuStateChange}>
      <p className={styles.menuItem} onClick={() => { scrollToInicio(); closeMenu(); }}>Inicio</p>
      <p className={styles.menuItem} onClick={() => { scrollToNosotros(); closeMenu(); }}>Nosotros</p>
      <p className={styles.menuItem} onClick={() => { scrollToSucursales(); closeMenu(); }}>Sucursales</p>
      <p className={styles.menuItem} onClick={() => { scrollToContacto(); closeMenu(); }}>Contacto</p>
    </Menu>
  );
};

export default MenuDesp;
