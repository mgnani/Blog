import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/popup.css'
Modal.setAppElement('#root'); // Indicar al modal el elemento raíz de la aplicación

const PopUp = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='contenedor-prop'>
            <div className="more_container" onClick={togglePopup}>
                <p id="open" className="more">See more ➤</p>
            </div>
      {isOpen && (
        <div className="popup" style={{ top: "0", left: "0" ,willChange: "transform"}}>
          <div className="popup-overlay" onClick={togglePopup} />
            <div className="popup-container">
            {children}
              <button onClick={togglePopup}>Cerrar pop-up</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;