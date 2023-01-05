import React from "react";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Footer from "../../components/footer/index";
import "./contato.css";

function Contato(){
    return (
            <>
            <Header />
            <div className='form'>
            <h1 id="cabeçalho">Contato:</h1>
            <p id="paragrafo">Deixe aqui a sua dúvida, sugestão e/ou reclamação.</p>
            <Form />
            </div>
            <Footer />
            </>          
    )
}

export default Contato;