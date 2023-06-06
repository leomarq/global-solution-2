import ChatGPT from '../../components/ChatGPT';

// Professor, veja a imagem erro.gpt em /public/images. Como vc pode ver, o código está funcionando normalmente, porém não conseguimos fazer essa parte de integração IA pois meu plano grátis pra utilização da API do ChatGPT expirou e eu teria que pagar (em dólar) pra ter essa funcionalidade no site

function Ia() {

    console.log("Professor, veja a imagem erro.gpt em /public/images. Como vc pode ver, o código está funcionando normalmente, porém não conseguimos fazer essa parte de integração IA pois meu plano grátis pra utilização da API do ChatGPT expirou e eu teria que pagar (em dólar) pra ter essa funcionalidade no site")

    return (
        <div>
            <ChatGPT/>
        </div>
    )
}

export default Ia;