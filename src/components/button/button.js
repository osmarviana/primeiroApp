import React from "react";
import './styles.css';

function Button({ name, active, onClick }){
    return (
        <div className="containerButton">
        <button onClick={() => onClick(0)} className={active ? "button" : "disabledButton"}>{name}</button>
        <span className="info">Seus dados estão a salvo conosco</span>
        </div>
    )
}

export default Button