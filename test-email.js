const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "helton.supervisor@klholding.com.br",
    pass: "helton#KL2", // Substitua pela sua senha
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Erro na autenticação:", error);
  } else {
    console.log("Autenticação bem-sucedida!");
  }
});
