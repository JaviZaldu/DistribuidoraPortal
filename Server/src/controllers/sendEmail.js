const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { subject, name, lastName, email, message } = req.body;

  try {
    if (!subject || !name || !lastName || !email || !message) {
      return res.status(500).send("Ingrese todos los datos");
    } else {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "distribuidoraportal.mkt@gmail.com", // Tu dirección de correo electrónico
          pass: "jlarcqhyolyxonvb", // Tu contraseña
        },
      });
      const mailOptions = {
        from: "distribuidoraportal.mkt@gmail.com", // Remitente
        to: "distribuidoraportal.mkt@gmail.com", // Destinatario
        subject: `Contacto desde Web: ${subject}`, // Asunto
        text: `            
                    Nombre: ${name}
                    Apellido: ${lastName}
                    Email: ${email}
                    Mensaje: ${message}
                    `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(400).send("Error al enviar correo");
        } else {
          return res.status(200).send("Correo enviado");
        }
      });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = sendEmail;
