import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import './produtos.css';

function Produtos(){
    const produtos = [
        {nome: '🍪 Biscoito de café', id: 10},
        {nome: '🍪 Biscoito amanteigado', id: 20},
        {nome: '🍪 Biscoito de amendoim', id: 30},
    ]

    return (
        <div>
            <Header />
            {produtos.map((produto, index) => (
                <Link key={index} className="bisc" to={`detalhes/${produto.id}`}>
                <span className="prod">{produto.nome}</span>
                </Link>
            ))}
        </div>
    )
}

export default Produtos;