import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='conteudo'>
            <h1>Bem vindo à GROW</h1>
            <button>Quem somos</button><br/>
            <button>Sua plantação</button><br/>
            <button>Fale com nossa IA</button><br/>
            <button className='button' id='conta-home'>Sua conta</button>
        </div>
    )
}

export default Home;