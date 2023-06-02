import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='conteudo'>
            <h1>Bem vindo à GROW</h1>
            <button className='button' id='sobre-home'><Link to='/Sobre' style={{ textDecoration: 'none', color: 'inherit' }}>Quem somos</Link></button><br/>
            <button className='button' id='planta-home'><Link to='/Planta' style={{ textDecoration: 'none', color: 'inherit' }}>Sua plantação</Link></button><br/>
            <button className='button' id='ia-home'><Link to='/IA' style={{ textDecoration: 'none', color: 'inherit' }}>Fale com nossa IA</Link></button><br/>
            <button className='button' id='conta-home'><Link to='/Conta' style={{ textDecoration: 'none', color: 'inherit' }}>Sua conta</Link></button>
        </div>
    )
}

export default Home;