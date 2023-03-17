import React from "react";
import '../css/fondo.css'
import imagen_fondo from '../imagenes/wave.svg'

function Fondo(){
    const imagen = "http://front-end-noobs.com/jecko/img/wave-top.png";
    const styles1 = {
        backgroundImage: `url("http://front-end-noobs.com/jecko/img/wave-top.png")`,
      };
      const styles2 = {
        backgroundImage: `url("http://front-end-noobs.com/jecko/img/wave-mid.png")`,
      };
      const styles3 = {
        backgroundImage: `url("http://front-end-noobs.com/jecko/img/wave-bot.png")`,
      };
    return(
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div> 
          <div className="wave"></div> 
          <div className="rotate">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div> 
          <div className="wave"></div> 
          </div>
        </div>
    );
}
export default Fondo;