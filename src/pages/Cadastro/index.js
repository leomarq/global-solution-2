import './Cadastro.css'
import { useForm } from 'react-hook-form';

function Cadastro() {

    const {register, setValue, setFocus} = useForm();

    const checkCEP = (e) => {

        if (!e.target.value) return;

        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setFocus('numero');
    }).catch((err) => console.log(err));
}
    
    return (
        <div className="conteudo-cadastro">
            <h2>Crie sua conta:</h2>
                <form>
                    <label for='email'>E-mail:</label><br/>
                    <input className='input-cadastro' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <input className='input-cadastro' type="email" name="email" id="email" placeholder="Confirme seu E-mail" /><br /><br/>

                    <label for='nome'>Nome completo:</label><br/>
                    <input className='input-cadastro' type="text" name="nome" id="nome" placeholder="Nome completo" /><br /><br/>

                    <label for='cep'>CEP:</label><br/>
                    <input className='input-cadastro' type="text" name="cep" id="cep" placeholder="CEP" {...register('cep')} onBlur={checkCEP}/><br /><br/>

                    <label for='rua'>Rua:</label><br/>
                    <input className='input-cadastro' type="text" name="rua" id="rua" placeholder="Rua" {...register('rua')} /><br /><br/>

                    <label for='numero'>Número:</label><br/>
                    <input className='input-cadastro' type="text" name="numero" id="numero" placeholder="Nº" {...register('numero')} /><br /><br/>

                    <label for='bairro'>Bairro:</label><br/>
                    <input className='input-cadastro' type="text" name="bairro" id="bairro" placeholder="Bairro" {...register('bairro')} /><br /><br/>

                    <label for='cidade'>Cidade:</label><br/>
                    <input className='input-cadastro' type="text" name="cidade" id="cidade" placeholder="Cidade" {...register('cidade')} /><br /><br/>

                    <label for='uf'>Estado:</label><br/>
                    <input className='input-cadastro' type="text" name="uf" id="uf" placeholder="Estado" {...register('estado')} /><br /><br/>

                    <label for='senha'>Senha:</label><br/>
                    <input className='input-cadastro' type="password" name="senha" id="senha" placeholder="Senha" /><br />
                    <input className='input-cadastro' type="password" name="senha" id="senha" placeholder="Confirme sua senha" /><br />
                    <button className="button-cadastro" type="submit" id="cadastro">Criar conta</button>
                </form>
        </div>
    )
}

export default Cadastro;