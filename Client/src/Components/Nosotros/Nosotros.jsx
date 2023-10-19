import Styles from "./Nosotros.module.css"
function Nosotros() {
  return (
    <div className={Styles.Container} id="Nosotros">
        <div className={Styles.nuestroPersonal}>
            <img src="https://www.infobae.com/new-resizer/83j3hdmugCzo7SbdSW7sRYyQx50=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/M2QIF5KCOFCJXHR7GUJUL35QEA.jpg" alt="" className={Styles.img}></img>
            <div style={{marginTop:"-30px"}}>
                <p className={Styles.titulo}>NUESTRO PERSONAL</p>
                <p className={Styles.texto}>Sencillez, humildad, honestidad y pasión son los valores que guían nuestra empresa. Nuestro pilar es la sostenibilidad en las relaciones laborales con nuestros recursos humanos, clientes y proveedores.</p>
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