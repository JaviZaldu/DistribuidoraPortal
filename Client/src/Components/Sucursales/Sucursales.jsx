import styles from "./Sucursales.module.css"
function Sucursales() {
  return (
    <div className={styles.container} id="sucursales">
        <p className={styles.title}>NUESTRAS SUCURSALES</p>
        <p className={styles.text}>Busca tu sucursal más cercana. En Distribudora Portal <span>¡El Mejor Precio Siempre!</span></p>
        <iframe src="https://storage.googleapis.com/maps-solutions-kuedhuu5af/locator-plus/7out/locator-plus.html"
        loading="lazy"
        className={styles.mapa}
        title="Distribudora Portal"
        >
        </iframe>
    </div>
  );
}

export default Sucursales;