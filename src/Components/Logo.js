import React from 'react';
import cup from '../imgs/cup.png'

export default function Logo() {
    return (
        <div className="logo">
            <span>{"<"}</span>
            <img className="logoImage" src={cup} alt="Jornada dos Códigos"/>
            <span>{"/> "}</span>
            <h1>Jornada dos Códigos</h1>
        </div>
    )
}