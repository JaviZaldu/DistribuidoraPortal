import style from "./Contacto.module.css"
import { useState } from "react";
import {validate} from "./formValidator.js"
import { useDispatch } from "react-redux";
import { sendEmail } from "../../Redux/Actions";


function Contacto() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch()
  const [input , setInput] = useState({
    subject : "Consulta",
    name:"",
    lastName:"",
    email:"",
    message:""
  })

  const [errors, setErrors]= useState({})

  const handleMotivoChange = (e)=>{
    if(e.target.value === "Consulta"){
      setShowButton(false)
    }if(e.target.value === "Trabaja"){
      setShowButton(true)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setErrors(
    validate({
      ...input,
      [e.target.name]: e.target.value
    })
  );
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!errors.name && !errors.email && !errors.lastName && !errors.message && input.name && input.lastName && input.email && input.message){
      dispatch(sendEmail(input.subject, input.name,input.lastName,input.email,input.message))
      setInput({
        name:"",
        lastName:"",
        email:"",
        message:""
      })
    }
    
  }
  return (

    <div className={style.container} id="contacto">

      <div className={style.MotivoContainer}>
          <h3 className={style.title}>CONTÁCTENOS</h3>
          <p className={style.guia}>Envia tu consulta o accede al formulario para trabajar con nosotros</p>
          <select onChange={handleMotivoChange} className={style.select}>
              <option disabled selected>¿En qué te podemos ayudar?</option>
              <option value="Consulta">Consulta/Queja</option>
              <option value="Trabaja">Trabaja con nosotros</option>
          </select>
      </div>

      <form className={style.Formulario} >
        {showButton ? 
        <div>
          <button className={style.button2}>COMPLETA NUESTRO FORMULARIO</button>
        </div> 
        
        :
        
        <div className={style.InputsFormulario}>
            <div className={style.namesContainer}>
              <input type="text" name="name" value={input.name} placeholder="Nombre" onChange={handleInputChange} className={style.names}></input>
              {errors.name && <label className={style.error}>{errors.name}</label>}
              <input type="text" name="lastName" value={input.lastName} placeholder="Apellido" onChange={handleInputChange} className={style.names}></input>
              {errors.lastName && <label className={style.error}>{errors.lastName}</label>}
              <input type="text" name="email" value={input.email} placeholder="Email" onChange={handleInputChange} className={style.names}></input>
              {errors.email && <label className={style.error}>{errors.email}</label>}
            </div>
            <div className={style.emailMensaje}>
              <textarea name="message" value={input.message} placeholder="Mensaje" onChange={handleInputChange} className={style.mensaje}></textarea>
              {errors.message && <label className={style.error}>{errors.message}</label>}
            </div>
            {!errors.name && !errors.lastName && !errors.email && !errors.message && <button onClick={handleSubmit} className={style.button}>ENVIAR</button>}
        </div>
          }
      </form>
    </div>
  );
}

export default Contacto;