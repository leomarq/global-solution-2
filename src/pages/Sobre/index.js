import './Sobre.css';

function Sobre() {
    return (
        <div className='conteudo-sobre'>
            <h2>Sobre a GROW</h2>
            <p>A fome mundial e a escassez de alimentos são desafios urgentes e que atualmente afetam milhões de pessoas no mundo. Enquanto uma parcela da população mundial desfruta de segurança alimentar e vivem em países com altos indicadores de qualidade de vida, outros lutam diariamente para garantir suas necessidades básicas e sobrevivência.</p>
            <p>Pensando em utilizar a tecnologia para combater a fome, criamos a GROW! Aqui você pode criar, organizar, acompanhar o crescimento da sua própria plantação e até pedir uma ajudinha para nossa IA. Vem com a gente e inicie sua caminhada para a autossuficiência alimentar!</p><br/>
            <h2>Nossa equipe</h2>
            <h3>José Carlos</h3>
            <div className='conteudo-equipe'>
            <img src="/images/carlos.png" alt="Integrante da equipe: José Carlos"/>
            <p>• Desenvolvedor back-end: Java; SQL</p>
            </div><br/>
            <h3>Leonardo Marques</h3>
            <div className='conteudo-equipe'>
            <img src="/images/leonardo.png" alt="Integrante da equipe: Leonardo Marques"/>
            <p>• Desenvolvedor front-end: HTML; CSS; JavaScript; React</p>
            </div>
            <h3>Maria Luiza</h3>
            <div className='conteudo-equipe'>
            <img src="/images/luiza.png" alt="Integrante da equipe: Maria Luiza"/>
            <p>• Analista de dados</p>
            </div><br/>
            <h3>Mariana Marques</h3>
            <div className='conteudo-equipe'>
            <img src="/images/mariana.png" alt="Integrante da equipe: Mariana Marques"/>
            <p>• Desenvolvedora back-end: Java; SQL</p>
            </div><br/>
            <h3>Vinicius Pena</h3>
            <div className='conteudo-equipe'>
            <img src="/images/vinicius.png" alt="Integrante da equipe: Vinicius Pena"/>
            <p>• Desenvolvedor back-end: Python; SQL</p>
            </div><br/>
        </div>
    )
}

export default Sobre;