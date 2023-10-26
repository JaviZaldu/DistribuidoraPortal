import React from "react";
import "./App.css";

import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./Components/Inicio/Inicio";
import Nosotros from "./Components/Nosotros/Nosotros";
import Sucursales from "./Components/Sucursales/Sucursales";
// import Contacto from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Nosotros />
      <Sucursales />
      {/*  <Contacto/>*/}
      <Footer />
    </div>
  );
}

export default App;
