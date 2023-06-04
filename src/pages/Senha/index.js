import './Senha.css'


function Senha() {
    return (
        <div className="conteudo-senha">
                <form>
                    <input className='input-senha' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <button className='button-senha' type="submit" id="codigo">Enviar código</button>
                </form>
        </div>
    )
}

export default Senha;