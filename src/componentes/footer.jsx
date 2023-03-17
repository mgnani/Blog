import React from "react";
import '../css/footer.css'
import Redes from "./redes";
function Footer(){
    return(
        <footer>
            <Redes imagen="linkedin" link="https://www.linkedin.com/in/nahuel-perez-31b609205/"/>
            <Redes imagen="facebook" link="https://www.facebook.com/nahuel.perez.161009/"/>
            <div>
                <p><span>NGP</span> Tecnology</p>
            </div>
            <Redes imagen="twitter" link="https://twitter.com/nani1504arg"/>
            <Redes imagen="instagram" link="https://www.instagram.com/nanigp.m/"/>
        </footer>
    );
}
export default Footer;