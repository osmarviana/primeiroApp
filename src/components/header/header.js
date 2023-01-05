import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/logo.png';

function Header(){

    return (
        <header>
            <img src={logo} alt='' />
            <nav>
                <ul>
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
        </header>
    )
}

export default Header;