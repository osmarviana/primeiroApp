import React from "react";
import styles from './form.css';

function Form() {

    return (
        <form className={styles.form}>
            <div>
                <label htmlFor={'name'}>Nome</label>
                <input id={'name'} type={'name'} autoComplete='off' placeholder="Insira seu nome completo" />            
            </div>
            <div>
                <label htmlFor={'email'}>E-mail</label>
                <input id={'email'} type={'email'} autoComplete='off' placeholder="Insira um e-mail válido" />            
            </div>
            <div>
                <label htmlFor={'phone'}>Telefone</label>
                <input id={'phone'} type={'number'} autoComplete='off' placeholder="Insira seu telefone" />            
            </div>
            <div>
                <p>Assunto:</p>
                <select name="Assunto">
                    <option value="empty"></option>
                    <option value="Duvida">Dúvida</option>
                    <option value="Reclamacao">Reclamação</option>
                    <option value="Sugestao">Sugestão</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div>
            <p>Descrição:</p>
                <textarea id="mensagem" placeholder="Insira seu comentário" required></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )

}

export default Form;