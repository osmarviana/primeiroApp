import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './styles.css';


function Footer(){

    return(
        <footer>
            <img src={logo} alt='' />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Osmar Viana</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={ { textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={ { textDecoration: 'none' }} to='/produtos'>
                        <li>Produtos</li>
                    </Link>
                    <Link style={ { textDecoration: 'none' }} to='/galeria'>
                        <li>Galeria</li>
                    </Link>
                    <Link style={ { textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>        
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;