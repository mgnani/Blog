import React from "react";
import '../css/redes.css'

function Redes(props){
    return(
        <a href={props.link} target="noopener">
            <img src={require(`../imagenes/redes/${props.imagen}.svg`)} alt={props.imagen} className="imagen_redes"/>
        </a>
    );
}
export default Redes;