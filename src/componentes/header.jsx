import React from "react";
import '../css/header.css'
import TextoMaquinaEscribir from "./letras";
function Header(){
    const palabras = ['Freelance', 'Designer', 'Developer'];
    return(
        <header>
                <div className="nav_container">
                    <h2>Hi, mi name is</h2>
                    <h1>Nahuel Gabriel Perez</h1>
                    <div className="text_container">
                        <b>
                            <p id="text">And i´m <span><TextoMaquinaEscribir palabras={palabras} velocidad={100}/></span></p><i className="typed" id="text"></i>
                        </b>
                    </div>
                    <button><a href="#contacto">Contact me</a> </button>
                </div>
        </header>
    );
}
export default Header;