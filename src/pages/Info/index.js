import './Info.css';
import Api from './Api';
import { useState } from 'react';

function Info() {
    
    const [noticia, setNoticia] = useState('');
    const [valorNoticia, setValorNoticia] = useState('');

    async function retornarNoticia() {
        const response = await Api('')
    }

    return (
        <div className='conteudo'>
            <h1>Listar</h1>
        </div>
    )
}

export default Info;