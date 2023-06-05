import './Plantacao.css';
import { useState, useEffect } from 'react';

function Plantacao() {

    const [plantacao, setPlantacao] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/Empresas/rest/plantacao").then((resp) => {
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
            <div className="conteudo">
            <div className="conteudo-simulador">

                {/* <h2>Empresas e Valores das Ações</h2> */}
                    <table className='tabela-simulador'>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Vegetal</th>
                                <th>Horta</th>
                                <th>Fileira</th>
                                <th>Posição</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plantacao.map((horta) => (
                                <tr key={horta.codPlantacao}>
                                    <td>{horta.codUsuario}</td>
                                    <td>{horta.codAlimento}</td>
                                    <td>{horta.codHorta}</td>
                                    <td>{horta.fileira}</td>
                                    <td>{horta.posicao}</td>
                                    <td>{horta.qntdPlantada}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
        </div>
    )
}

export default Plantacao;