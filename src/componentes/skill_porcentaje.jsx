import React from "react";
import '../css/skill_porcentaje.css'
function Porcentaje(props){
    return(
        <div>
            <tr>
                <td>{props.skill}</td>
            </tr>
            <tr>
                <td class="porcentaje">
                    <div style={{ width: props.ancho + "%" }}></div>
                </td>
                <td>{props.ancho}%</td>
            </tr>
        </div>
    );
}
export default Porcentaje;