import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='conteudo'>
            <h1>Bem vindo à GROW</h1>
            <button className='button' id='sobre-home'><Link to='/Sobre' style={{ textDecoration: 'none', color: 'inherit' }}>Quem somos</Link></button><br/>
            <button className='button' id='planta-home'><Link to='/Plantacao' style={{ textDecoration: 'none', color: 'inherit' }}>Sua plantação</Link></button><br/>
            <button className='button' id='info-home'><Link to='/Info' style={{ textDecoration: 'none', color: 'inherit' }}>Informações</Link></button><br/>
            <button className='button' id='ia-home'><Link to='/IA' style={{ textDecoration: 'none', color: 'inherit' }}>Fale com nossa IA</Link></button><br/>
            <button className='button' id='conta-home'><Link to='/Conta' style={{ textDecoration: 'none', color: 'inherit' }}>Sua conta</Link></button><br/>
            <button className='button' id='contato-home'><Link to='/Contato' style={{ textDecoration: 'none', color: 'inherit' }}>Fale conosco</Link></button><br/>
        </div>
    )
}

export default Home;