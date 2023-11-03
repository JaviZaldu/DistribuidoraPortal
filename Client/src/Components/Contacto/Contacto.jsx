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
      <p className={style.title}>CONTACTO</p>
      <p className={style.guia}>|| Envia tu consulta o accede al formulario para trabajar con nosotros</p>
      <form>
        <select onChange={handleMotivoChange} className={style.select}>
            <option disabled selected>Motivo</option>
            <option value="Consulta">Consulta</option>
            <option value="Trabaja">Trabaja con nosotros</option>
        </select>
        {showButton ? <div><button className={style.button}>ACCEDE AL FORMULARIO</button></div> :
        <div>
          <div>
            <div className={style.namesContainer}>
            <input type="text" name="name" value={input.name} placeholder="Nombre" onChange={handleInputChange} className={style.names}></input>
            {errors.name && <label className={style.error}>{errors.name}</label>}
            <input type="text" name="lastName" value={input.lastName} placeholder="Apellido" onChange={handleInputChange} className={style.names}></input>
            {errors.lastName && <label className={style.error}>{errors.lastName}</label>}
            </div>
          </div>
          <div className={style.emailMensaje}>
            <input type="text" name="email" value={input.email} placeholder="Email" onChange={handleInputChange} className={style.email}></input>
            {errors.email && <label className={style.error}>{errors.email}</label>}
            <textarea name="message" value={input.message} placeholder="Mensaje" onChange={handleInputChange} className={style.mensaje}></textarea>
            {errors.message && <label className={style.error}>{errors.message}</label>}
          </div>
          {!errors.name && !errors.lastName && !errors.email && !errors.message && <button onClick={handleSubmit}>Enviar</button>}
        </div>
          }
      </form>
    </div>
  );
}

export default Contacto;