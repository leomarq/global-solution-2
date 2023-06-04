import './Conta.css';
import { Link } from 'react-router-dom';

function Conta() {
    return (
        <div className='conteudo-conta'>
            <form>
                    <input className='input-conta' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <input className='input-conta' type="password" name="senha" id="senha" placeholder="Senha" /><br />
                    <button className='button-conta' type="submit" id="login">Login</button><br /><br />
                    <button className='button-conta' id="esqueceu-senha"><Link to='/Senha' style={{ textDecoration: 'none', color: 'inherit' }}>Esqueceu sua senha?</Link></button><br />
                    <button className='button-conta' id="criar-conta"><Link to='/Cadastro' style={{ textDecoration: 'none', color: 'inherit' }}>Crie sua conta</Link></button>                    
            </form>
        </div>
    )
}

export default Conta;