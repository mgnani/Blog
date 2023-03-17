import React from "react";
import '../css/nav.css'
import logo from '../imagenes/mi_logo.png'
function Nav(){

    return(
        <nav>
            <img src={logo} alt="logo_Nahuel_Perez" />
        </nav>
    );
}
export default Nav;