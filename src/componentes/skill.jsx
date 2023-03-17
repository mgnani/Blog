import React from "react";
import '../css/skill.css'
function Skill(props){
    return(
        <div className="img_skill">
            <img src={require(`../imagenes/skill_imagen/${props.imagen}.png`)} alt={props.imagen}/>
        </div>
    );
}
export default Skill;