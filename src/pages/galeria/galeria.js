import React from "react";
import Header from "../../components/header/header";
import './styles.css';

function Galeria(){
    return (
        <div>
            <>
            <Header />
            <h1>Biscoitos Sabores da Einha</h1>
            <div className="bisc-fotos-container">
                <div className="bisc-content">
                    <div className="foto banner-1">Biscoito de Café</div>
                    <div className="foto banner-2">Biscoito Amanteigado</div>
                    <div className="foto banner-3">Biscoito Amanteigado com Goiabada</div>
                    <div className="foto banner-4">Biscoito Amandoim</div>
                </div>
            </div>
            </>
        </div>
    )
}

export default Galeria;