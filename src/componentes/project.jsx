import React from "react";
import '../css/project.css'
function Project(props){
    return(
        <div className="project" >
            <img src={require(`../imagenes/imagenes_proyectos/${props.imagen}.svg`)} alt={props.imagen} id="mi-svg" />
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    );
}
export default Project;