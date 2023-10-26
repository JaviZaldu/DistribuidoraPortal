import LogoIG from "../../Assets/Logos/LogoIGoriginal.png"
import LogoFB from "../../Assets/Logos/LogofbOriginal.png"
import styles from "./Footer.module.css"
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.fila1}>
        <div>
          <p className={styles.text}>Av. Circunvalacion 1294</p>
          <p className={styles.text}>Tucumán, San Miguel de Tucumán, Argentina</p>
          <p className={styles.text}>CP:4000</p>
        </div>
        <div>
          <a href="https://instagram.com/portal.distribuidorasrl?igshid=NTc4MTIwNjQ2YQ==" target="_blank" ><img src={LogoIG} alt="" className={styles.logos}></img></a>
          <a href="https://www.facebook.com/portal.distribuidorasrl" target="_blank" ><img src={LogoFB} alt="" className={styles.logos}></img></a>
        </div>
        <div>
          <p className={styles.text}>Email: contacto@distribuidoraportal.com</p>
          <p className={styles.text}>Horarios: lunes a sábados. 8:30 a 13 y 17 a 21 hs</p>
        </div>
      </div>
      <div>
        <p className={styles.text}>Derechos reservados ©-2023-Distribuidora Portal</p>
      </div>
      
    </div>
  );
}

export default Footer;