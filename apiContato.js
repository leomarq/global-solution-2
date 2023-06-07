const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/api/form', (request, response) => {
    let data = request.body;
    let smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        ignoreTLS: true,
        auth: {
            user: process.env.EMAIL || 'projetogrowfiap@gmail.com',
            pass: process.env.PASSWORD || '!Projetogrow123'
        },
        tls: {
            rejectUnAuthorized: true,
        }
    }

    let smtpTransport = nodemailer.createTransport(smtpConfig);

    let mailOptions = {
        to: process.env.EMAIL || 'projetogrowfiap@gmail.com',
        subject: `${data.subject}`,
        html: `
        <h3>Informações</h3>
        <h4>Você recebeu um e-mail de: ${data.name}</h4>
        <p>Dados de ${data.name}: </p>
        <ul>
          <li>Nome: ${data.name}</li>
          <li>E-mail: ${data.email}</li>
          <li>Celular: ${data.number}</li>
        </ul>
        <h4>Mensagem: </h4>
        <p>${data.message}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error){
            console.log(error);
        } else {
            response.send('Enviado com sucesso.')
        }
    })

    smtpTransport.close();
});

const PORT = process.env.PORT||3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});