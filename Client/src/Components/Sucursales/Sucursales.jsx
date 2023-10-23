import styles from "./Sucursales.module.css"
function Sucursales() {
  return (
    <div className={styles.container}>
        <p className={styles.title}>NUESTRAS SUCURSALES</p>
        <iframe src="https://storage.googleapis.com/maps-solutions-kuedhuu5af/locator-plus/7out/locator-plus.html"
        loading="lazy"
        className={styles.mapa}>
        </iframe>
    </div>
  );
}

export default Sucursales;


