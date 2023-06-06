import './Plantacao.css';
import { useState, useEffect } from 'react';

function Plantacao() {

    const [plantacao, setPlantacao] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/Empresas/rest/relatorio").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setPlantacao(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // const handleDelete = (id) => {
    //     fetch(`http://localhost:8080/Empresas/rest/empresa/${id}`, {
    //         method: "delete"
    //     }).then(() => {
    //         window.location = "/"
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    return (
        <div className='conteudo'>
            <h2>Suas Plantações</h2>
            <table className='tabela-horta'>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Horta</th>
                        <th>Vegetal</th>
                        <th>Fileira</th>
                        <th>Posição</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {plantacao.map((horta) => (
                        <tr key={horta.codPlantacao}>
                            <td>{horta.nome}</td>
                            <td>{horta.nomeHorta}</td>
                            <td>{horta.nomeAlimento}</td>
                            <td>{horta.fileira}</td>
                            <td>{horta.posicao}</td>
                            <td>{horta.qntdPlantada}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Plantacao;