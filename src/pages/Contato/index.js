import './Contato.css';
import React from 'react';
import emailjs from 'emailjs-com';

function Contato() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ngxxb2k', e.target, '7Wm3Vni8gk3yrbJAy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <div className='conteudo'>
            <form onSubmit={sendEmail}>
                <input type="text" className='input-contato' placeholder='Nome' name='from_name' /><br/>
                <input type="text" className='input-contato' placeholder='E-mail' name='email' /><br/>
                <input type="text" className='input-contato' placeholder='Assunto' name='subject' /><br/>
                <textarea name="mensagem" id="" cols="30" rows="10" placeholder='Digite sua mensagem...'></textarea><br/>
                <input type="submit" className='button-contato' value='Enviar' />
            </form>
        </div>
    )
}

export default Contato;