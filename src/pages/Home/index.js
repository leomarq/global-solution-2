import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='conteudo'>
            <h1>Bem vindo à GROW</h1>
            {/* <button className='button' id='sobre-home'><Link to='/Sobre'>Quem somos</Link></button><br/>
            <button className='button' id='planta-home'><Link to='/Planta'>Sua plantação</Link></button><br/>
            <button className='button' id='ia-home'><Link to='/IA'>Fale com nossa IA</Link></button><br/>
            <button className='button' id='conta-home'><Link to='/Conta'>Sua conta</Link></button> */}
            <button className='button' id='sobre-home'>Quem somos</button><br/>
            <button className='button' id='planta-home'>Sua plantação</button><br/>
            <button className='button' id='ia-home'>Fale com nossa IA</button><br/>
            <button className='button' id='conta-home'>Sua conta</button>
        </div>
    )
}

export default Home;